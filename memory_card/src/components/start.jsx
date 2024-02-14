import { useState } from 'react'

export default function Start(props){

    let setGameStart = props.setGameStart;
    
    function handleClick(){
        setGameStart(true);
        document.getElementById('start_button').remove();
    }

    return(
        <button id='start_button' onClick={handleClick}>START GAME!</button>
    )
}