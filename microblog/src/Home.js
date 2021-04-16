import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Bloglist from './Bloglist';
import {getTitles} from './actionCreators';

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTitles())
    }, [dispatch])

    return (
        <div>
            <p>Welcome to the homepage component!  Nothing to see 
                here, it's just a placeholder for the Blog List!
            </p>
            <Bloglist />
        </div>
    )
};

export default Home;