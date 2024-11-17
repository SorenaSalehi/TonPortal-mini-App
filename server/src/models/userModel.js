import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    first_name: String,
    telegramId: { type: Number, unique: true },
    language_code: String,
    last_name: String,
    photo_url: String,
    username: String,
    groups: Object,
    credits: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date}
});

const User = mongoose.model('User', userSchema);
export default User