import { useState, useEffect } from 'react'

export default function Bestscore(props){

    let bestScore = props.bestScore;

    function updateBestScore(){
        return bestScore;
    }

    useEffect(() => {
        updateBestScore();
    },[bestScore])
    
    return(
        <>
        <p>Best Score :{updateBestScore()}</p>
        </>
    )
}