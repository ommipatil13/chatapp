import React, { useState } from 'react';
import "./join.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";

}

const Join = () => {

  const [name, setname] = useState("");
  // console.log(name);



  return (
    <div className='joinPage'>
      <div className='joinContainer'>
        <img src={logo} alt="logo" />

        <h1>Chat Bot App</h1>
        <input onChange={(e) => setname(e.target.value)} type="text" id="joinInput" placeholder='Enter Your Name' />
        <Link onClick={(event)=> !name ?event.preventDefault():null} to='/chat'><button onClick={sendUser} className='joinBtn'>Login</button></Link>


      </div>

    </div>
  )
}

export default Join

export { user }