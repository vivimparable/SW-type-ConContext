import React from 'react'

export default function DatosPilotos({pilots}) {
    
  return (
    
    <>
  
    <div className='col-6'>
    <h2>Pilots</h2>
      {pilots.length==0?
      <p>No hay pilotos</p>
      :
        pilots.map(a=>{
            return <p>{a}</p>
        })
      }</div>
    </>
  )
}
