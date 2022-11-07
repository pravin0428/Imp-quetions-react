import { useEffect, useRef, useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return

  

  // const label = "Timer"
  // const hours = 0
  // const minutes = 0
  // const seconds = 0
  const ref = useRef(null)
  const[hours , setHours] = useState(new Date().getHours())
  const[minutes , setMinutes] = useState(new Date().getMinutes())
  const[seconds , setSeconds] = useState(new Date().getSeconds())
  
  const startTimer = () =>{
   setInterval(()=>{
    setHours(new Date().getHours())
    setMinutes(new Date().getMinutes())
    setSeconds(new Date().getSeconds())
    },1000)
  }

useEffect(()=>{
  return startTimer
},[])

  return{
    hours , minutes , seconds
  }

};

export default useClock;
