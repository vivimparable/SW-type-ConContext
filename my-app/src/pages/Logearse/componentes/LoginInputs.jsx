import React from 'react'

export default function LoginInputs({email,password,onSubmitEvent}) {


    
  return (
    <>
      <h1 className='text-center'>Login</h1>
      <p className='text-center text-light'>If you want to have acces to the ships, please log in first. </p>
       <br />
       <p className='text-center text-light'>If you dont have an account go to the register part.</p>
       <div className='container'> 
        <form onSubmit={onSubmitEvent} className='d-flex flex-md-row flex-column justify-content-center'>
            <input ref={email} placeholder='email' id='email' name='email' type="email" />
            <input ref={password} placeholder='Password' id="Password" name='Password' type="text" />
            <button className='btn btn-outline-light' type='submit'>Submit</button>
        </form>
      </div> 
    </>
  )
}
