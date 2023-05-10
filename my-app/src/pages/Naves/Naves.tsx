import React, { useContext } from 'react';
import NavesListadas from './Componentes/NavesListadas';
import { useNavigate } from 'react-router-dom';
import { segundoContext } from '../../context/context';
 export default function Naves() {

  const {naves} =useContext(segundoContext)

  const navegarA = useNavigate();
  
  
  return (
    <> 
     <NavesListadas navegarA={navegarA} naves={naves}/>
    </>
  )
}
