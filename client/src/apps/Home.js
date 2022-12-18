import React,{useState} from 'react'
import {Newspaper} from 'phosphor-react'
import Navbar from '../components/Navbar'
import Game from '../components/Game';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  const [begin,setBegin] = useState(false);
 
 
  return (
    <div className=' bg-red-900'>
      <Navbar />
      <div className='flex bg-blue-200'>
        <Newspaper size={32} />
      </div>
      {begin ? <div></div> : <button onClick={()=>{setBegin(true)}}>Oyunu Başlat</button>}
      {begin && <Game  />}
        <Link to="/princess"><div className='bg-gray-500'>Prensesi taş,kağıt,makas </div></Link>
      <Footer />
    </div>
  )
}
