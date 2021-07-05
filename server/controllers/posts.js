import mongoose from 'mongoose'
import Post from "../models/Post.js"

export const getPosts = async(req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const createPost = async(req, res) => {
    const post = req.body
    const newPost = new Post(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async(req, res) => {
    const {id: _id} = req.params
    const post = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).send('No such post')
    }
    try {
        const updatedPost = await Post.findByIdAndUpdate(_id, post, {new: true})
        res.json(updatedPost)
    } catch (error) {
        console.log(error)
    }
} 

export const deletePost = async(req, res) => {
    const {id: _id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).send('Post does not exist')
    }
    try {
        await Post.findByIdAndRemove(_id)
        res.json('Post deleted.')
    } catch (error) {
        console.log(error)
    }
}

export const addLike = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send('Post id does not exist')
    }
    try {
        const post = await Post.findById(id)
        // console.log(post.title, post.like)
        post.like = post.like + 1
        
        await Post.findByIdAndUpdate(id, post, {new: true})
        
        res.json(post.like)

    } catch (error) {
        console.log(error)
    }
}