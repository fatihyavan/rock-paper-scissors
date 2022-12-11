import React,{useState} from 'react'
import {Newspaper} from 'phosphor-react'
import Navbar from '../components/Navbar'
import Game from '../components/Game';

export default function Home() {
  const [begin,setBegin] = useState(false);
  const openScene = () =>{
    setBegin(true);
  }
  return (
    <div className='text-3xl font-bold  bg-red-900'>
      <Navbar />
      Home
      <div className='flex bg-blue-200'>
        <Newspaper size={32} />
      </div>
      {begin ? <div></div> : <button onClick={openScene}>Oyunu Başlat</button>}
      {begin && <Game />}
     
    </div>
  )
}
