import React from 'react';

function Form({handleChange, data, handleSubmit}){

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='imgUrl'>Image URL: </label>
            <input type='text'
                    name='imgUrl'
                    placeholder='Image URL'
                    value={data.imgUrl} 
                    onChange={handleChange} />
            <label htmlFor='topText'>Top Text: </label>
            <input type='text'
                    name='topText'
                    placeholder='Top Text'
                    value={data.topText} 
                    onChange={handleChange} />
            <label htmlFor='bottomText'>Bottom Text</label>
            <input type='text'
                    name='bottomText'
                    placeholder='Bottom Text'
                    value={data.bottomText} 
                    onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default Form;