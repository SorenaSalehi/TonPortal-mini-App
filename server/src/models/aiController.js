import { getOpenAi, getOpenAiTweet } from "./../utils/openAi.js";
import Group from "./../models/groupModel.js";
import twitter from "./../models/twitterModel.js";



const getAllGroupsMessage = async function(groupIds) {
    try{
        const getMessages = await Group.find({ groupId: { $in: groupIds } }, 'groupMessages groupName');
        
        // If no groups found, return undefined
        if (!getMessages || getMessages.length === 0) return undefined;

        const formatMessages = getMessages.map(group => {
            // Check if groupMessages is empty
            if (!group.groupMessages || group.groupMessages.length === 0) {
                return undefined;
            }
            return `[group: ${group.groupName}, messages: ${group.groupMessages}]`;
        }).filter(message => message !== undefined); // Remove undefined entries

        // If all groups had empty messages, return undefined
        if (formatMessages.length === 0) return undefined;

        return formatMessages.join(',');
    }catch(err){
        console.err('Error getting groups messages: ', err)
    }
    
}

const getAllTweets = async function(tokenArr) {
    try {
       const existingTokens = await twitter.find(
        { name: { $in: tokenArr } }, 
        'name messages -_id'
    );
    const existingNames = existingTokens.map(token => token.name);
    const newTokens = tokenArr.filter(token => !existingNames.includes(token));

    if (newTokens.length > 0) {
        await twitter.insertMany(
            newTokens.map(token => ({ 
                name: token, 
                messages: [] 
            })),
            { ordered: false }
        );
    }

    const tokensWithMessages = existingTokens.filter(token => token.messages.length > 0);

    if (tokensWithMessages.length === 0) {
        return null;
    }

    return tokensWithMessages
        .map(token => `[token name: ${token.name}, messages: ${token.messages}]`)
        .join(',');
    }catch(err){
        console.err('Error getting token tweets: ', err)
    }
    
} 


export const groupAi = async(req, res)=>{
    try{
        const query = req.query.id
        const groupId = query.split(',').map(Number)
        const messages = await getAllGroupsMessage(groupId)
        if (!messages) {
            return res.json({
                status: 'success',
                data: 'No messages found for this group. please wait some time, fren.'
            });
        }
        const aiRes = await getOpenAi(messages)
    res.json({
        status: 'success',
        data: aiRes,
    })        
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
            })
    }

}

export const tweetAi = async(req, res)=>{
    try{
        const query = req.query.id
        const tokens = query.split(',').map(item => `$${item.trim().toLowerCase()}`);

        const messages = await getAllTweets(tokens)
        if (!messages){
            return res.json({
                status: 'success',
                data: 'we are getting your token`s data, check out tomorrow, fren. '
            })
        }
        const aiRes = await getOpenAiTweet(messages)
        res.json({
            status: 'success',
            data: aiRes,
        })

    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
            })
    }

}
