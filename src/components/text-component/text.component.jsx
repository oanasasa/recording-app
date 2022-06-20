import React from "react";


const TextComponent = ({ phrase }) => {
    const { text } = phrase;

    return(
        <div className = 'text-component-container'>
            <h3 className='text'>{text}</h3>
        </div>
    );

}

export default TextComponent;