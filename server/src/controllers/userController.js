import { validateInitData } from "./../utils/validateInitData.js";
import User from "./../models/userModel.js";

export const health = async(req, res) => {
    res.json({ status: 'yep' });
}

export const authMiddleware = async (req, res, next) => {
    try {
        const isValid = validateInitData(req.headers.authorization);
        if (!isValid) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        
        const urlParams = new URLSearchParams(req.headers.authorization);
        const userData = JSON.parse(decodeURIComponent(urlParams.get('user')));
        req.user = userData
        next();
    } catch (error) {
        res.status(400).json({
        status: 'fail',
        message: error
        })
    }
};

export const userData= async(req, res) => {
    try {
        let user = await User.findOne({ telegramId: req.user.id }).select('-_id -__v');
        if (!user) {
        user = new User({
            telegramId: req.user.id,
            username: req.user.username,
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            photo_url: req.user.photo_url,
            language_code: req.user.language_code,
        });
        await user.save(); 
        }
        res.json({
        status: 'success',
        data: user,
    })
    } catch (error){
        res.status(400).json({
        status: 'fail',
        message: error
        })
    }
}