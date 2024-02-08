import { useState, useEffect } from 'react'

export default function Card(props){

    let imgs = props.imgs;
    let setImages = props.setImages;
    let gameStart = props.gameStart;
    let setGameStart = props.setGameStart;
    const final = [];

    useEffect(() => {
        if(gameStart===true){
            (async function loadImgs(){
                try{
                    for(let i=0; i<imgs.length; i++){
                        let cardResp = await fetch("https://api.giphy.com/v1/gifs/"+imgs[i]+"?api_key=l0ufBRdrCdJLe00XVyuQ4B0PQPunkLxZ");
                        let cardData = await cardResp.json();
                        final.push(<img src={cardData.images.original.url}></img>);
                    }
                }
                catch{
                    console.error("error");
                }
            })();
        }
    },[])

    return(
        {final}
    )

}