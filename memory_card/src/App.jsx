import { useState, useEffect } from 'react'
import Start from './components/start'
import Header from '/src/components/header'
import './App.css'
import Card from './components/card';

function App() {

  const [gameStart, setGameStart] = useState(false);
  const [imgs, setImages] = useState([]);

  function Started({start}){
    if(start===true){
      return(
        <h2>STARTED!</h2>
      )
    }
  }
  useEffect(()=>{
    console.log(imgs);
  },[imgs]);

  useEffect(() => {

    if(gameStart===true){
      (async function loadImg(){
        try{
          let response = await fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=l0ufBRdrCdJLe00XVyuQ4B0PQPunkLxZ&limit=3');
          let imgData = await response.json();
          for(let i=0; i<imgData.data.length;i++){
            console.log(imgData.data[i].id);
            setImages(imgs => [...imgs, imgData.data[i].id]);
          }
        }
        catch{
          console.error("error");
        }
      })();
    }

    return () => {}
  },[gameStart])
  return (
    <>
      <Header />
      <Start gameStart={gameStart} setGameStart={setGameStart}/>
      <Started start={gameStart}></Started>
      <Card imgs={imgs} setImages={setImages} gameStart={gameStart} setGameStart={setGameStart}></Card>
    </>
  )
}

export default App
