import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavegadorStyle.scss'
import { useNavigate } from 'react-router-dom'
import sw from './imagenes/sw.png'
import {Contexto} from '../../context/context';
import { useContext } from 'react';

export default function Navegador() {
  const {islogged, setislogged} = useContext(Contexto)
  const Navegador = useNavigate();

  return (
    <nav>
        <div className='row align-items-center  '>
          <div className='col-xl-4 col-12 offset-xl-4 text-center'>
            <img  src={sw} alt="" />
          </div>
          <div className='mt-lg-0 mt-4 col-xl-4 col-12 text-xl-end text-center pe-xl-5 '> 
            <nav>
              {islogged==false ?

              <div>
                  <button onClick={()=> Navegador('/Registrarse')} className='btn btn-outline-light me-5 '>Register</button>
                  <button onClick={()=> Navegador('/Logearse')} className='btn btn-outline-light' >Log In</button>
              </div>

              : <button onClick={()=> setislogged(false)} className='btn btn-outline-light' >Log Out</button>
              }
              </nav> 
              
          </div>
        </div>

        <div className='text-center nav-box '>
          
          
           <NavLink className={({isActive})=>  isActive?'activo':''} to='/Naves'>Ships</NavLink>
          <NavLink className={({isActive})=>  isActive?'activo':''}  to='/'>Home</NavLink>
          
          
       </div>
    </nav>
  )
}
