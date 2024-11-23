import Group from './../models/groupModel.js'
import User from './../models/userModel.js'
import bot from './../app.js';
const saveToDbInterval = 20 * 1000;
const messageLimit = 5


// get bot new group and seva to db
export const newAddsHandler = async (msg, bot) => {
    try {
        const isMybot = msg.new_chat_members.some(
            member => member.id === +process.env.GROUP_BOT_ID
        );
        if (!isMybot) return;

        const invitedBy = msg.from.id
        const { chat } = msg;
        let PhotoUrl = null;

        // get photo
    try {
        const groupData = await bot.getChat(chat.id);
                
        if (groupData.photo) {
                const groupPhotoId = groupData.photo.small_file_id;
                PhotoUrl = await bot.getFileLink(groupPhotoId);
            }
        } catch (err) {
            console.warn(`Photo fetch failed for group ${chat.id}: ${err.message}`);
        }

        // add to group db
        await Group.findOneAndUpdate(
            { groupId: chat.id },
            {
                groupId: chat.id,
                groupName: chat.title,
                PhotoUrl
            },
            { 
                upsert: true, 
                new: true,
            }
        );
        await User.findOneAndUpdate(
            {userId: invitedBy}, 
            {$addToSet: { groups: chat.id }}
        )


        } catch (err) {
            console.error(`Error in new chat members handler: ${err.message}`);
        }
    };
  
// get group meassages and seva to buffer
const messageBuffer = new Map();
export const NewMessagesHandler = async (msg) => {
    console.log(msg)
    if (!msg.text) return
    const groupId = msg.chat.id;

    if (!messageBuffer.has(groupId)) {
        messageBuffer.set(groupId, []);
    }

    messageBuffer.get(groupId).push(msg.text);

    if (messageBuffer.get(groupId).length === messageLimit) {
        await saveMessagesToDb(groupId, messageBuffer.get(groupId));
        messageBuffer.set(groupId, []);
    }
  
};

// save it to db
const saveMessagesToDb = async function(groupId, messages) {
    try {
        await Group.findOneAndUpdate(
            { groupId },
            {
                $push: {
                    groupMessages: {
                        $each: messages,
                        $slice: -messageLimit
                    }
                }
            },
            {
                upsert: true,
                new: true
            }
        );
    } catch (err) {
        console.error('Error saving messages:', err);
    }
}

export const checkGroupMember = async function(groupId, userId) {
    const isMember = await bot.getChatMember(groupId, userId)
    return (isMember.status === 'left') ? false : true
    
}


setInterval(async () => {
    for (const [groupId, messages] of messageBuffer.entries()) {
        if (messages.length > 0) {
            await saveMessagesToDb(groupId, messages);
            messageBuffer.set(groupId, []);
        }
    }
}, saveToDbInterval); 

