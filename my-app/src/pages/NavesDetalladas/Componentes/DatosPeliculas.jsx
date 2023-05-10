import React from 'react'

export default function DatosPeliculas({films}) {
  return (
    <>
      <div className='col-6'>
      <h2>Films</h2>
      {films.map(a=>{
            return <p>{a}</p>
        })
      }</div>
    </>
  )
}
