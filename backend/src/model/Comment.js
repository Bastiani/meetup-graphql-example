import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
  postId: String,
  content: String,
});

const comment = mongoose.model('Comment', commentSchema);

export default comment;
