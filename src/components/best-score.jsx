import { useState, useEffect } from 'react'
import '../styles/header.css'

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
        <p className='bestScore'>Best Score: {updateBestScore()}</p>
        </>
    )
}