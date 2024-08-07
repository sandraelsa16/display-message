import React, { useState } from 'react'

function Display() {

  const[text,setText]=useState("")
  function show(){
    setText("Welcome")
  }

  function hide(){
    setText("")
  }
  return (
    <div>
      <div className="container text-center">
         <img src="https://2227229.fs1.hubspotusercontent-na1.net/hub/2227229/hubfs/Blog_EN_PICS/Email%20Nudges%20-%20Full%20Size.gif?width=300&name=Email%20Nudges%20-%20Full%20Size.gif" alt=""  className='m-5'/>
      </div>
      <div className="text-center">
        <p>{text}</p>
        <div className="btn btn-success m-3" onClick={show}>Show</div>
        <div className="btn btn-danger m-3" onClick={hide}>Hide</div>
      </div>
    </div>
  )
}

export default Display
