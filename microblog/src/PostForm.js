import React from 'react';

function PostForm({data, handleChange, handleSubmit}) {

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title: </label>
            <input type='text'
                    name='title'
                    value={data.title}
                    onChange={handleChange} /><br /><br />
            <label htmlFor='description'>Description: </label>
            <input type='text'
                    name='description'
                    value={data.description}
                    onChange={handleChange} /><br /><br />
            <label htmlFor='body'>Body: </label>
            <textarea name='body'
                    rows='10'
                    cols='100'
                    value={data.body}
                    onChange={handleChange} /><br /><br />
            <button>Save</button>
        </form>
    )
};

export default PostForm;