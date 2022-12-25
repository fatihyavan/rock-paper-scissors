import React, { useEffect, useState } from 'react'
import paper from '../images/paper.png'
import rock from '../images/rock.png'
import scissors from '../images/scissors.png'

export default function Game() {
  const [choice,setChoice] = useState("");
  const [robotChoice,setRobotChoice] = useState("");
  const [result,setResult] = useState("");

  const choiceList = [
    'rock','paper','scissors'
  ];
  
  useEffect(()=>{
    calculateWin();
  },[choice,robotChoice]);


  const makeChoice = (e)=>{
     setChoice(e.target.getAttribute('data-id'));
     makeRobotChoice();
    
    
  };
  const makeRobotChoice = ()=>{
    setRobotChoice(choiceList[Math.floor(Math.random()*choiceList.length)]);
  }

  function calculateWin(){
  if(choice==="rock"){
    switch(robotChoice){
      case 'paper':
         setResult("loss")
        break
      case 'scissors':
         setResult('win')
        break
      default:
         setResult('draw')
        break
    }
  }
  else if (choice === 'paper'){
    switch(robotChoice){
      case 'scissors':
         setResult('loss')
        break
      case 'rock':
         setResult('win')
        break
      default:
         setResult('draw')
        break
    }
  }
  else if(choice === 'scissors'){
    switch(robotChoice){
      case 'rock':
         setResult('loss')
        break
      case 'paper':
         setResult('win')
        break
      default:
         setResult('draw')
        break
    }
  }
  }

  return (
    <div>
      <div className='flex justify-center'> Taş,kağıt,makastan birini seçiniz</div>
      <div className='flex justify-center space-x-20 '>
        <div className='pt-10 rounded-full border-2 bg-blue-500'><img src={rock} alt={rock} data-id="rock" onClick={makeChoice} /></div>
        <div><img src={paper} alt={paper} data-id="paper" onClick={makeChoice} /></div>
        <div className='pt-10'><img src={scissors} alt={scissors}  data-id="scissors" onClick={makeChoice} /></div>
        
      </div>
      <div>Sonuc
        <div>{result}</div>
        <div>Sizin seçimizi:{choice}</div>
        <div>Robotun seçimi:{robotChoice}</div>
      </div>
      
    </div>
     
  )
}

// onClick={(rock)=>makeChoice(rock)}
// onClick={makeChoice(paper)}