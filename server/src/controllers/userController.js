import { validateInitData } from "./../utils/validateInitData.js";
import { checkGroupMember } from "./botController.js";
import User from "./../models/userModel.js";
import Group from "./../models/groupModel.js";



export const health = async(req, res) => {
    res.json({ status: 'yep' });
}

export const authMiddleware = async (req, res, next) => {
    try {
        const isValid = validateInitData(req.headers.authorization);
        if (!isValid) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        next();
    } catch (err) {
        res.status(400).json({
        status: 'fail',
        message: err
        })
    }
};

export const userData= async(req, res) => {
    try {
        const urlParams = new URLSearchParams(req.headers.authorization);
        const userData = JSON.parse(decodeURIComponent(urlParams.get('user')));
        let user = await User.findOne({ userId: userData.id }).select('-_id -__v');
        if (!user) {
            user = await User.create({
                userId: userData.id,
                userName: userData.username,
                firstName: userData.first_name,
                lastName: userData.last_name,
                photoUrl: userData.photo_url,
                languageCode: userData.language_code
            });
        }
        res.json({
        status: 'success',
        data: userData,
    })
    } catch (err){
        res.status(400).json({
        status: 'fail',
        message: err
        })
    }
}

export const groupData = async(req, res) => {
    try {
    const urlParams = new URLSearchParams(req.headers.authorization);
    const userData = JSON.parse(decodeURIComponent(urlParams.get('user')));
    const userId = userData.id
    // get all groups
    const userGroups = [];
    const groupIds = await Group.find({}, { groupId: 1, _id: 0 }).lean();
    // check if user is in
    for (const { groupId } of groupIds) {
        if (await checkGroupMember(groupId, userId)) {
            userGroups.push(groupId);
        }
    }
    // get info of user groups
    const groupDetails = await Group.find(
        { groupId: { $in: userGroups } },
        { _id: 0, __v: 0, groupMessages: 0 })
    
    res.json({
        status: 'success',
        data: groupDetails,
        })
    
        // return groupDetails;
    }catch(err){
        res.status(400).json({
        status: 'fail',
        message: err
        })
    }


}
