import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NewPost from './NewPost';
import Home from './Home';
import BlogPost from './BlogPost';

function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/new'>
                <NewPost />
            </Route>
            <Route exact path='/:postId'>
                <BlogPost />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
};

export default Routes;