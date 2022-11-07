import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const[list , setList] = useState<number[]>(initialArray)

  const appendStart = (elem:number) => {
   setList((prev) => [elem , ...prev])
  }
  const popEnd = () => {
     let modifiedList = [...list]
     modifiedList.shift();
     setList(modifiedList)
  }
  const clear = () => {
    setList([])
  }
 const reset = () => {
  setList(initialArray)
 }

 const appendEnd = (elem:number) =>{
   setList((prev)=> [...prev , elem])
 }

 const popStart = () =>{
  let modifiedListP = [...list]
  modifiedListP.shift();
  setList(modifiedListP)
}

return{
 list,appendStart,popEnd,clear,reset,appendEnd,popStart
}
 

};

export default useNumberList;
