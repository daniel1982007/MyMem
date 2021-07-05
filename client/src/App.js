import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Container} from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

const App = () => {

    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route> 
                    <Route path='/auth'>
                        <Auth />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App