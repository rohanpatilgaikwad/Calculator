import { useState } from "react";

function Btns({handelclick}){
    let [btns,setBtn] = useState(['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'])
    return <>
    <div className="btn-container">
    {btns.map(btn => <button key={btn} onClick={(evt)=>handelclick(btn)} >{btn}</button>)}
    </div>
    </>
}
export default Btns;