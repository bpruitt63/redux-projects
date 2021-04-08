import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import Form from './Form';
import Meme from './Meme';
import MemeList from './MemeList';

function App() {

  const initialState = {topText: '',
                        bottomText: '',
                        imgUrl: ''}
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const memes = useSelector(store => store.memes);

  const handleChange = e => {
    const {name, value} = e.target
    setData(d => ({
        ...d,
        [name]: value
    }))
  };

  const handleSubmit = e => {
      e.preventDefault();
      dispatch({type: "SUBMIT", payload: data});
      setData(initialState);
  };

  return (
    <div className="App">
      <Form handleChange={handleChange} 
            data={data} 
            handleSubmit={handleSubmit}/>
      <Meme data={data} />
      <MemeList memes={memes} />
    </div>
  );
}

export default App;
