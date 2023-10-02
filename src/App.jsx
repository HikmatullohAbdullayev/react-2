import React from 'react'
import './App.css'
// import { Test_components } from './components/Test-component'


function App() {
const [num, newNum] = React.useState(0)
// console.log(state);

const add = () =>{
  newNum( (p) => p + 1)
}
const remove = () => {
  newNum( (p) => p == 0)
}

  return (
    <>
      <div>
       
        <h1>{num}</h1> 
        <button onClick={add}>count</button>
        <button onClick={remove}>remove</button>




      </div>
     
    </>
  )
}

export default App
