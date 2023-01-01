import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Scoreboard({user}) {
  const [scoreboard,setScoreBoard] = useState("");

   const getAll = () => {
    axios
    .get('/score/getallscore')
    .then((res)=>{
      console.log(res.data);
        setScoreBoard(res.data);
        })
        
    }

    const tablerow = () => {
      return scoreboard.map((key,index)=>{
        for(let element in key){
          return(<tr>{key[element]}</tr>)
        }
      });
    }
console.log(tablerow);
  useEffect(()=>{
    getAll();
  },[]);

  return (
    <div>
      {/* <div className='bg-yellow-500'>Scoreboard </div>
      <div id='scoreboard'></div> */}
      <div className=' h-64'>
      <table>
        <thead>
          <tr>Username</tr>
          <tr>Win</tr>
          <tr>Total Play</tr>
        </thead>
        <tbody id='element'>
         {tablerow}
        </tbody>
      </table>
      </div>
    </div>
  )
}
