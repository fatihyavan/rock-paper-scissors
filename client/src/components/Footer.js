import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Scoreboard({user}) {
  const [scoreboard,setScoreBoard] = useState("");

   const getAll = () => {
    axios
    .get('/score/getscore',{where: {user_name:user}})
    .then((res)=>{
      console.log(res.data);
        setScoreBoard(res.data);
        })
        
    }

  
  useEffect(()=>{
    getAll();
  },[]);

  return (
    <div>
      {/* <div className='bg-yellow-500'>Scoreboard </div>
      <div id='scoreboard'></div> */}
      <div className='flex justify-center space-x-12 h-64'>
        <div>Kullanıcı Adı</div>
        <div>Kazanma Saysısı</div>
        <div>Toplam Oyun Sayısı</div>
      </div>
    </div>
  )
}
