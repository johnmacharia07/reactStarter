/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import './App.css';
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
import profiles from "./FakeData";

function App() {
  const [myAge, setMyAge] = useState(30);
  // let myAge = 20;
  console.log(myAge);
  // const [count, setCount] = useState(0);

  const [fullname, setFullname] = useState('Waiting for data')

  const getRandomName = async () => {

    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    setFullname(data.results[0].name.first +' '+ data.results[0].name.last)
    console.log(data.results[0].name.first +' '+ data.results[0].name.last)
    return data.results[0].picture.large


  }

  useEffect(() => {
    getRandomName()
  }, [])



  return (
    <>
      <h2 style={{color: 'red'}}>MY age is {myAge}</h2>
      <button onClick={()=> {setMyAge(myAge + 1)}}>+</button>
      <button onClick={()=>{setMyAge(myAge - 1)}}>-</button>
      {/* <p style={{color: 'red'}}>My Count is {count} </p>
      <button onClick={()=>setCount(count+1)}>
        Add Count
      </button> */}
      <br></br>
      <MyButton title='Buy' color='green'/>
      <MyButton title='Sell' color='red'/>
      {profiles.map( profile => (
        <ProfileCard
         image={`https://robohash.org/${Math.random()}.png`}
         title={profile.title}
         name={fullname}
         description={profile.description}
        />
      ) )}
    </>
    
  );

}

// console.log(Math.random());

export default App