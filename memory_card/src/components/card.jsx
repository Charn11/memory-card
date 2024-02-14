import { useState, useEffect } from 'react'

export default function Card(props){

    const [storeID, setStoreId] = useState([]);
    let imgs = props.imgs;
    let setImages = props.setImages;
    let score = props.score;
    let setScore = props.setScore;
    let bestScore = props.bestScore;
    let setBestScore = props.setBestScore;

    function updateImgs(){
        return imgs;
    }

    function imgShuffle(){
        let shuffled = imgs
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        setImages(shuffled);
    }

    useEffect(() => {
        console.log(storeID);
        console.log(score);
        console.log(bestScore);
    },[storeID])

    useEffect(() => {
        if(score>bestScore){
            setBestScore(score);
        }
    },[score])

    useEffect(() => {
        updateImgs();
        return () => {
        }
    },[imgs])

    function handleClick(value){
        if(!storeID.includes(value.id)){
            setStoreId(storeID => [...storeID, value.id])
            setScore(score+1);
            imgShuffle();
        }else{
            imgShuffle();
            setScore(0);
            setStoreId([]);
        }
    }

    return(
        <div className='card' onClick={(e)=>handleClick(e.target)}>{updateImgs()}</div>
    )

}