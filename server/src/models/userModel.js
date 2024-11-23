import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: String,
    userId: { type: Number, unique: true },
    languageCode: String,
    lastName: String,
    photoUrl: String,
    userName: String,
    groups: [Number],
    credits: { type: Number, default: 0 },
    isPremium: Boolean,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date}
});

const User = mongoose.model('User', userSchema);
export default User