import React, { useEffect, useState } from 'react'
import paper from '../images/paper.png'
import rock from '../images/rock.png'
import scissors from '../images/scissors.png'

export default function Game() {
  const [choice,setChoice] = useState("");
  
  const makeChoice = (e)=>{
    console.log(e.target.value);
    console.log(e.target.dataset.id);
    console.log("bbb");
   setChoice(e.target.dataset.id);
  };

useEffect(()=>{
  console.log(choice);
},[choice]);

  return (
    <div>
      <div className='flex justify-center'> Taş,kağıt,makastan birini seçiniz</div>
      <div className='flex justify-center space-x-20 '>
        <div data-id="rock" onClick={makeChoice} ><img src={rock} alt={rock}></img></div>
        <div data-id="paper" onClick={makeChoice} ><img src={paper} alt={paper}></img></div>
        <div data-id="scissor" onClick={makeChoice} ><img src={scissors} alt={scissors}></img></div>
        
      </div>
    </div>
     
  )
}

// onClick={(rock)=>makeChoice(rock)}
// onClick={makeChoice(paper)}