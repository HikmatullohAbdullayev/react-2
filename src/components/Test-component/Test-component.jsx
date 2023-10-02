import React from "react";

export const Test_components = () => {
    const [num, newNum] = React.useState({})


//Malumor


const addName = () => {
  newNum((p) => {
    return {...p,name: "Hikmatulloh"}
  })
}
const addLastName = () => {
  newNum({...num, lastName: "Abdullayev" })
}
const addYear = () => {
  newNum({...num, year: 2003})
}
const addTask = () => {
  newNum ({...num , task: 2})
}
console.log(num);

// Malumotlarni o'chirish

const delName = () => {
  newNum ((p) => {
    const obj = {...p}
    
    delete obj?.name
    return obj
  })
  
}
const delLastName = () => {
  newNum ((p) => {
    const obj = {...p}
    
    delete obj?.lastName
    return obj
  })
}
const delYear = () => {
  newNum ((p) => {
    const obj = {...p}
    
    delete obj?.year
    return obj
  })
}
const delTask = () => {
  newNum ((p) => {
    const obj = {...p}
    
    delete obj?.task
    return obj
  })
}
  
  return (
   <>
    <h1 onClick={delName}>{num.name}</h1>
      <h1 onClick={delLastName}>{num.lastName}</h1>
      <h1 onClick={delYear}>{num.year} yil</h1>
      <h1 onClick={delTask}> #{num.task} - vazifa</h1>
      <button onClick={addName}>Ism</button>
      <button onClick={addLastName}>Familya </button>
      <button onClick={addYear}>Yil</button>
      <button onClick={addTask}>Vazifa raqami</button>
      <h1>{num?.loc}</h1>
   </>
  );
};
