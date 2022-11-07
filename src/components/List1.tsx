import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  initialValues : Array<number>
  label : string
};
const List1 = ( {initialValues , label}: List1Props) => {
  // const{label} = props
  const{list,appendStart,popEnd,clear,reset,appendEnd,popStart} = useNumberList(initialValues)
  const[num , setNum] = useState<number>(0)

const handleChange = (inNum:number) =>{
       setNum(inNum)
}


 
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      {list.map((elem , id)=>(
         <div  data-testid="list1-element" key={elem+id} >{elem}</div>
      ))}
      
      

      
      <input data-testid="list1-input" value={num} onChange={(e)=> handleChange(+e.target.value)} />
      <button data-testid="list1-btn-append-start" onClick={()=>appendStart(num)} > 
        {/* Append to start of list btn */}
      Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={popEnd}  >
        {/* po last element btn */}
        Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={clear} >
        {/* clear list and set empty button */}
        Clare
      </button>
      <button data-testid="list1-btn-reset"onClick={reset} >
        {/* Reset list to default value btn */}
        reset
      </button>
    </div>
  );
};

export default List1;
