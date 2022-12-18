import React from 'react'
import Saban from '../images/saban.png'

export default function Notfound() {
  return (
    <div>
        <div className='flex h-60 items-center font-mono justify-center bg-red-500 text-7xl '>
            Yanlış geldin bu işte bir oyun olabilir!!!!
        </div>
        <div className='flex justify-center rounded-lg'>
           <img src={Saban} ></img>
        </div>
    </div>
  )
}
