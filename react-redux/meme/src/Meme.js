import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

function Meme({data}) {

    const [isGoodImg, setIsGoodImg] = useState(false);
    const dispatch = useDispatch();

    const loaded = () => {
        setIsGoodImg(true);
    };

    const notLoaded = () => {
        setIsGoodImg(false);
    };

    const remove = e => {
        const id = e.target.id;
        dispatch({type: "REMOVE", payload: id});
    };

    return (
        <div>
            {!isGoodImg &&
                <p>Image not available</p>
            }
            <div className={ !isGoodImg ? 'hide' : 'meme'}>
                <img src={data.imgUrl} 
                        alt='Meme' 
                        onLoad={loaded}
                        onError={notLoaded}/>
                <p className='topText'>{data.topText}</p>
                <p className='bottomText'>{data.bottomText}</p>
            </div>
            {data.id && <button onClick={remove} id={data.id}>
                            Remove Meme
                        </button>
            }
        </div>
    )
};

export default Meme;