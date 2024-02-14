import { useState, useEffect } from 'react'

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
        <p>Score :{updateScore()}</p>
        </>
    )
}