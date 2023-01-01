import React,{useState,useEffect} from 'react'
import { Heartbeat } from 'phosphor-react'
import Navbar from './Navbar'
import PrincessPhoto from '../images/princess.jpeg'
import MonsterPhoto from "../images/monster.jpeg"
import rock from "../images/rock.png"
import paper from "../images/paper.png"
import scissors from "../images/scissors.png"

export default function Princess() {
  const [princessHealth,setPrincessHealth] = useState(90);
  const [monsterHealth,setMonsterHealth] = useState(90);
  const [choice,setChoice] = useState("");
  const [robotChoice,setRobotChoice] = useState("");
  const [result,setResult]=useState("");

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
  };


  const calculateWin = () =>{
    if((princessHealth>0 && monsterHealth>0)){
      console.log("prenses sasğlık");
      console.log(princessHealth);
      console.log("aşağı monster");
      console.log(monsterHealth);
      if(choice==="rock"){
        switch(robotChoice){
          case 'paper':
             setPrincessHealth(princessHealth - 30)
            break
          case 'scissors':
             setMonsterHealth(monsterHealth - 30)
            break
          default:
             setMonsterHealth(monsterHealth - 15)
             setPrincessHealth(princessHealth - 15)
            break
        }
      }
      else if (choice === 'paper'){
        switch(robotChoice){
          case 'scissors':
            setPrincessHealth(princessHealth-30)
            break
          case 'rock':
            setMonsterHealth(monsterHealth-30)
            break
          default:
            setMonsterHealth(monsterHealth-15)
            setPrincessHealth(princessHealth-15)
            break
        }
      }
      else if(choice === 'scissors'){
        switch(robotChoice){
          case 'rock':
            setPrincessHealth(princessHealth-30)
            break
          case 'paper':
            setMonsterHealth(monsterHealth-30)
            break
          default:
            setMonsterHealth(monsterHealth-15)
            setPrincessHealth(princessHealth-15)
            break
        }
      }
    }
    

  }

  useEffect(()=>{
    if(princessHealth<=0 && monsterHealth>0) {
      setResult("Monster win. You lost pretty princess.");
    }
    if(monsterHealth<=0 && princessHealth>0){
      setResult("Cong. my Lord you save the princess");
    }
  },[princessHealth,monsterHealth]);


  return (
    <div>
      <Navbar />
      <div className='flex flex-col text-2xl pt-16 text-red-900 '>
        
        <div className='flex justify-center'>Prenses, canavar tarafından saldırı altında!!!!</div>
        <div className='flex justify-center'>Prensesi kurtarmak istiyorsan canavarı yenmen lazım</div>
      </div>

     {result ? <div>{result} </div> : <div className='flex space-x-48 pl-80 py-12'>
        
        <div className='flex flex-col'><img className='rounded-full' src={PrincessPhoto}></img>
            <div className='pl-20'>
            <Heartbeat size={32} /> {princessHealth}
            </div>
        </div>
        <div><img className='rounded-lg pt-10' src={MonsterPhoto}></img>
          <div className='pl-32'>
          <Heartbeat size={32} /> {monsterHealth}
          </div>
        </div>
      </div>}
      <div className='flex justify-center space-x-20 '>
        <div className='pt-10 rounded-full'><img src={rock} alt={rock} data-id="rock" onClick={makeChoice} /></div>
        <div><img src={paper} alt={paper} data-id="paper" onClick={makeChoice} /></div>
        <div className='pt-10'><img src={scissors} alt={scissors}  data-id="scissors" onClick={makeChoice} /></div>
      </div>
    </div>

  )
}
