import React from 'react'
import Home from '../pages/Home/Home'
import Naves from '../pages/Naves/Naves';
import NavesDetalladas from '../pages/NavesDetalladas/NavesDetalladas';
import Logearse from '../pages/Logearse/Logearse';
import Registrarse from '../pages/Registrarse/Registrarse';
//import ProteccionRuta from '../utilidades/proteccion de rutas/ProtecconRuta'
import {Routes, Route} from 'react-router-dom';
import ProtectRoute from '../utilidades/proteccion de rutas/ProtecconRuta'

export default function Router() {
  return (
    <>
        

        <Routes>
              <Route element={<ProtectRoute/>}>
                <Route  path='/Naves' element={<Naves/>}></Route>
                <Route path='/Naves/:id' element={<NavesDetalladas/>}></Route>
              </Route>

            <Route path='/' element={<Home/>}></Route>
            <Route path='/Logearse' element={<Logearse/>}></Route>
            <Route path='/Registrarse' element={<Registrarse/>}></Route>

        </Routes>
    </>
  )
}
