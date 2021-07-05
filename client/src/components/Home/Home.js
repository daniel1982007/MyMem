import React, {useState, useEffect} from 'react'
import {Grow, Container, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {getPosts} from '../../actions/posts'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

const Home = () => {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)

    //useEffect hook when after fetching data, component will be rerendered
    useEffect(() => {
        dispatch(getPosts())
        console.log('already sent to store for processing')
    }, [dispatch])//if variable posts in [], getPosts() will generate new state in redux store, because fetch 
    //data from backend,and replace to the store state.

    console.log('Home rerendered')

    return (
        <Grow in>
            <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home