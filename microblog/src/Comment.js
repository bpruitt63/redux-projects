import React, {useState} from 'react';
import MicroblogApi from './api';

function Comment({comment, postId}) {

    const [text, setText] = useState(comment.text)

    const remove = async () => {
        await MicroblogApi.deleteComment(postId, comment.id);
        setText('');
    };

    return (
        <div>
            {text && <button onClick={remove}>Delete Comment</button>}
            <p>{text}</p>
        </div>
    )
};

export default Comment;