import mongoose from 'mongoose'

const schema = mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    tags: [String],
    selectedFile: String,
    like: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', schema)

export default Post