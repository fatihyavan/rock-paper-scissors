import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Game from '../components/Game';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Home() {
  const [begin, setBegin] = useState(false);

  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");


  const userBegin = (e) => {
    setUser(e.target.value);

  }

  const beginGame = () => {
    if (user) {
      axios
        .post('score/createscore', { user_name: user })
        .then((res) => { console.log(res) })
        .catch((err) => console.log(err))
      if (!message) {
        setBegin(true);
      }
    } else {
      setMessage("Kullanıcı adınızı giriniz!!");
    }
  }


  useEffect(() => {
    setMessage("");
  }, [user]);

  return (
    <div className=' bg-stone-400 '>
      <Navbar />
      <div className='flex'>
      </div>

      {message && <div className='bg-red-800'>{message}</div>}

      {!begin && <div className='flex flex-col  justify-center'>
        <div className='flex justify-center'>Kullanıcı adı giriniz</div>
        <div className='flex justify-center'> <input className='  justify-items-center  w-96 px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md' onChange={userBegin}></input></div>
        <button>{begin ? <div></div> : <button onClick={beginGame}>Oyunu Başlat</button>}</button>
      </div>}

      {begin && <Game user={user} />}
      <Link to="/princess"><div className='bg-gray-500 h-32 grid justify-items-center items-center  text-black-600/75 text-2xl hover:text-gray-600'>Prensesi Kurtar Modu</div></Link>

    </div>
  )
}
