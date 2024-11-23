import mongoose from "mongoose";
const groupSchema = new mongoose.Schema({
    groupId: { type: Number, unique: true },
    groupName: String,
    PhotoUrl: String,
    groupMessages: [String]
});

const Group = mongoose.model('Group', groupSchema);
export default Group