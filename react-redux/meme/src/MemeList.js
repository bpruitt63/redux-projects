import React from 'react';
import Meme from './Meme';

function MemeList({memes}) {

    return (
        <div>
            {memes.map(meme => <Meme data={meme} key={meme.id} />)}
        </div>
    )
}

export default MemeList;