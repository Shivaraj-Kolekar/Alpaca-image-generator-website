import React from 'react'

function Button (props){
    return (
        <>
            <button onClick={props.event}
              className='bg-blue-500 text-white px-8 py-4 m-2 hover:scale-105 transition-transform rounded-3xl'>{props.buttonname }</button>
        </>
    )
}

export default Button;