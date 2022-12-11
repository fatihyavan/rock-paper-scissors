import React, { useEffect, useState } from 'react'
import paper from '../images/paper.png'
import rock from '../images/rock.png'
import scissors from '../images/scissors.png'

export default function Game() {

  const [select,setSelect] = useState("a"); 
  const selectRock = ()=>{
   setSelect("tas");
  };


  return (
    <div>
      <div className='flex justify-center'> Taş,kağıt,makastan birini seçiniz</div>
      <div className='flex justify-center space-x-20 '>
        <button onSubmit={selectRock} ><img src={rock} alt={rock}></img></button>
        <button ><img src={paper} alt={paper}></img></button>
        <button ><img src={scissors} alt={scissors}></img></button>
        
      </div>
      <div>{select}</div>
    </div>
     
  )
}

// onClick={(rock)=>makeChoice(rock)}
// onClick={makeChoice(paper)}