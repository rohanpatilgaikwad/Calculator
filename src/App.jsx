import Container from "./Components/container"
import Input from "./input"
import Btns from "./Components/Btns"
import { useState } from "react"
import Footer from "./Components/footer"

function App() {
let [inputVal,setInputVal] =useState("")
const handelclick=(btnText)=>{
  if(btnText === 'C'){
   setInputVal("")
  }
  else if(btnText=='='){
    let Result =eval(inputVal);
    setInputVal(Result)
  }
  else{
   
    setInputVal(inputVal+btnText)
  }
console.log(btnText);


}
  return (
    <>
    <div className="main">
    <Container>
      <Input val={inputVal}>  </Input>
    <Btns handelclick={handelclick}></Btns>
    
    </Container>
    </div>
    <Footer></Footer>
     </>
  )
}

export default App
