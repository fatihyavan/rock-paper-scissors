import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Scoreboard({user,win,totalPlayed}) {


 



  return (
    <div>
      <div className='flex justify-center space-x-12 h-16'>
        <div>Kullanıcı Adı</div>
        <div>Kazanma Sayısı</div>
        <div>Toplam Oyun Sayısı</div>
      </div>
      <div className='flex justify-center pb-6 space-x-32'>
        <div>{user}</div>
        <div>{win}</div>
        <div>{totalPlayed}</div>
      </div>
     
    </div>
  )
}
