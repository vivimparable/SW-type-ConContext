import React from 'react'

export default function RegistroForm({onSubmitEventRegisto,email,password,msj}) {
  return (
    <>
      <h1 className='text-center'>Register</h1>

            <div className='container'> 
            <form onSubmit={onSubmitEventRegisto} className='d-flex flex-md-row flex-column justify-content-center'>
                <input ref={email} placeholder='email' id='email' name='email' type="email" />
                <input ref={password} placeholder='Password' id="Password" name='Password' type="text" />
                <button className='btn btn-outline-light' type='submit'>Submit</button>
            </form>
            
            <h3 className='text-center text-light'>{msj}</h3>
            
            
            </div> 
    </>
  )
}
