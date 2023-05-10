import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import {Contexto} from '../../context/context';
export default function ProtectedRoute() {
    const {islogged}=useContext(Contexto);
    
  return (
    <>
        {islogged == true ?<Outlet/> : <Navigate to={'/Logearse'}/> }
    </>
  )
}
