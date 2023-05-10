import React from 'react'
import './NavesListadasStyle.scss'
export default function NavesListadas({naves, navegarA}) {
  return (
    <main>
        <h1 className='text-center text-light'>Naves</h1>
        {
            naves.map(a=>{
                return <p className='box-cages' onClick={()=> navegarA('/Naves/'+a.url.match(/\d+/)[0])}   key={a.name}>{a.name}</p>
            })
        }
    </main>
  )
}
