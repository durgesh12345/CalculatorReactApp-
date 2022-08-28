import React, { useState } from 'react'
import './Calculate.css';
import './index.css';
export default function Calculator() {

    // set rsult value using setState hook
const[result,setResult] = useState("");

// create  click function to add number as string 
const handlerClick=(e)=>{
   setResult(result.concat(e.target.name));
  }

//   remove all the value from display
const clear = ()=>{
    setResult("");
};

// remove one character from display
const backspace = ()=>{
    setResult(result.slice(0, result.length - 1));

};

// calculate the value using eval function or return  error if error occure 
const Calculator = ()=>{
  try{
    setResult(eval(result).toString());
  }catch(e){
    setResult("Error");
  }

}
// return function
  return (

  <>
  <div className="container">
    <div id='icon'>
    <p id ='red'></p>
    <p id ='yellow'></p>
     <p id ='green'></p>
   
    
    </div>
    <h1 id='title'>CALCULATOR</h1>
  <form> 
    <input type="text" value={result} ></input>
  </form>

  <div className="keypad">
    <button onClick={clear} id="clear" className='highlight'>AC</button>
    <button  onClick={backspace} id="backspace" className='highlight'> <img id='delete' src='https://cdn-icons-png.flaticon.com/128/6927/6927328.png'></img> </button>
    <button name='/'  onClick={handlerClick} className='highlight'> &divide;</button>
    <button name='7' onClick={handlerClick} id='number'>7</button>
    <button name='8' onClick={handlerClick} id='number'>8</button>
    <button name='9' onClick={handlerClick} id='number'>9</button>
    <button name='*' onClick={handlerClick} className='highlight'>&times;</button>
    <button name='4' onClick={handlerClick} id='number'>4</button>
    <button name='5' onClick={handlerClick} id='number'>5</button>
    <button name='6' onClick={handlerClick} id='number'>6</button>
    <button name='-' onClick={handlerClick} className='highlight'>&ndash;</button>
    <button name='1' onClick={handlerClick} id='number'>1</button>
    <button name='2' onClick={handlerClick} id='number'>2</button>
    <button name='3' onClick={handlerClick} id='number'>3</button>
    <button name='+' onClick={handlerClick} className='highlight'>+</button>
    <button name='0' onClick={handlerClick} id='number'>0</button>
    <button name='.' onClick={handlerClick} id='number'>.</button>
    <button  onClick={Calculator} id="result" className='highlight'><img id='delete' src='https://cdn-icons-png.flaticon.com/512/149/149707.png'></img></button>
   
  </div>
  </div>


  </>
   
  )
}
