import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Scoreboard({user}) {
  const [win,setWin] = useState(0);
  const [totalPlayed,setTotalPlayed] = useState(0);

  useEffect(()=>{
    axios
    .post('/score/getscore',{where: {user_name:user}})
    .then((res)=>{
        console.log(res.data);
        setWin(res.data.win);
        setTotalPlayed(res.data.totalPlayed);
        })
    .catch((err)=>{console.log(err);})     
  },[user,win,totalPlayed]);

  return (
    <div>
      <div className='flex justify-center space-x-12 h-64'>
        <div>Kullanıcı Adı</div>
        <div>Kazanma Sayısı</div>
        <div>Toplam Oyun Sayısı</div>
      </div>
      <div className='flex justify-center space-x-12'>
        <div>{user}</div>
        <div>{win}</div>
        <div>{totalPlayed}</div>
      </div>
     
    </div>
  )
}
