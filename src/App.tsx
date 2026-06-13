import React from 'react';
import { useState } from 'react';
import logo from'./assets/1.png';
import logo1 from'./assets/2.png';
import logo2 from'./assets/3.png';

function App() {

   const [bgColor, setBgColor] = useState("bg-blue");

   const [image, setImage] = useState(logo);

    const [toggle, setToggle] = useState(0);
  
  const changeColor = () => {

    if(toggle == 0)
    { console.log("color : ",bgColor)
      setToggle(1)
      setBgColor("bg-red-500"); //bg-red-500
      setImage(logo1)
    }
    else{
       console.log("color : ",bgColor)
       setToggle(0)
       setBgColor("bg-blue");  //bg-blue
       setImage(logo)
    }
    
  };

   const changeDress = () => {

    setImage(logo2)
   }


  return (<>
    <div className={`flex items-center justify-center bg-blue-500 w-64 h-64 ${bgColor}`}>
      {/* <h1 className="text-5xl font-bold text-slate-800 tracking-tight">
        Hello, World!
      </h1> */}
      
      <img src ={image} width="200" height="200" />
      </div>
      <div className='flex flex-row'>
        <br></br> 
      <button className='bg-blue-400' onClick={changeColor}>
      Change Background</button>
        <button className='mx-1 bg-green-500' onClick={changeDress}>
      Change Dress</button>
      </div>
    </>
  );
}

export default App;
