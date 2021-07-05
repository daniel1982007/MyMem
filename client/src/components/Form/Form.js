import React, {useState, useEffect} from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyles from './styles'
import {createPost, updatePost} from '../../actions/posts'
import {useDispatch, useSelector} from 'react-redux'
//./===current folder
//../===parent folder

const Form = ({currentId, setCurrentId}) => {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        creator: '', 
        title: '', 
        message: '', 
        tags: '', 
        selectedFile: ''
    })
    const posts = useSelector(state => state.posts)
    const post = posts.find(post => post._id === currentId)

    const dispatch = useDispatch()

    // if(currentId) {
    //     console.log('Form rendered')
    // }
    useEffect(() => {
        if(currentId) {
            setPostData(post)
        }
    }, [currentId])

    //update state, data input is from a form, async function
    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        clear()
    }

    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
        setCurrentId(null)
    }

    console.log('posts changed')

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography>Create a post</Typography>
                <TextField name='creator' value={postData.creator} onChange={e => setPostData({...postData, creator: e.target.value})} variant='outlined' label='creator' fullWidth/>
                <TextField name='title' value={postData.title} onChange={e => setPostData({...postData, title: e.target.value})} variant='outlined' label='title' fullWidth/>
                <TextField name='message' value={postData.message} onChange={e => setPostData({...postData, message: e.target.value})} variant='outlined' label='message' fullWidth/>
                <TextField name='tags' value={postData.tags} onChange={e => setPostData({...postData, tags: e.target.value})} variant='outlined' label='tags' fullWidth/>
                <div className={classes.fileInput}>
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' type='submit' size='large' fullWidth>submit</Button>
                <Button variant='contained' color='secondary' onClick={clear} size='small' fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form