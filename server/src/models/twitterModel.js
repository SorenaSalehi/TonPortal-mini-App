import mongoose from "mongoose";
const twitter = mongoose.model('twitter', new mongoose.Schema({}, { strict: false }));

export default twitter