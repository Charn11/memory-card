import { useState, useEffect } from 'react'
import Start from './components/start'
import Header from '/src/components/header'
import './App.css'
import './styles/main.css'
import Card from './components/card';
import Score from './components/score';
import Bestscore from './components/best-score';

function App() {

  const [gameStart, setGameStart] = useState(false);
  const [imgs, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(()=>{
    console.log(imgs);
  },[imgs]);

  useEffect(() => {

    const abortController = new AbortController();
    const { signal } = abortController;

    async function loadImg(){
      console.log("mount");
      try{
        let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=l0ufBRdrCdJLe00XVyuQ4B0PQPunkLxZ&q=vaporwave&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips', {signal});
        let imgData = await response.json();
        for(let i=0; i<imgData.data.length;i++){
          console.log(imgData.data[i].id);
          let cardResp = await fetch("https://api.giphy.com/v1/gifs/"+imgData.data[i].id+"?api_key=l0ufBRdrCdJLe00XVyuQ4B0PQPunkLxZ", {signal});
          let cardData = await cardResp.json();
          setImages(imgs => [...imgs,<img key={imgData.data[i].id} src={cardData.data.images.original.url} id={imgData.data[i].id}></img>]);
        }
      }
      catch{
        console.error("aborted");
      }
    }
    if(gameStart===true){
      loadImg();
    }

    return () => {
      abortController.abort();
      }
    },[gameStart]);

  return (
    <>
      <div className='head-container'>
      <Header/>
      <Score score={score}/>
      <Bestscore bestScore={bestScore} setBestScore={setBestScore}></Bestscore>
      </div>
      <div className='main-container'>
      <Start setGameStart={setGameStart}/>
      <Card imgs={imgs} setImages={setImages} score={score} setScore={setScore} 
      bestScore={bestScore} setBestScore={setBestScore}/>
      </div>
    </>
  )
}

export default App
