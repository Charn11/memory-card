import { useState, useEffect } from 'react'
import '../styles/header.css'

export default function Score(props){

    let score = props.score;

    function updateScore(){
        return score;
    }

    useEffect(() => {
        updateScore();
    },[score])
    
    return(
        <>
        <p className='score'>Score: {updateScore()}</p>
        </>
    )
}