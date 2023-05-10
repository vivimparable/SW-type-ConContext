import { useState, useEffect } from 'react';
import DatosNaves from './Componentes/DatosNaves';
import './NavesDetalladasStyle.scss';
import   getDetailedStar from '../../data/detailedStars'   
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailedShips from '../../context/DetailedShips';
export default function NavesDetalladas() {

  const {id }= useParams(); 
 
  //Naves Detalladas//
 const [details, setDetails] = useState([]); 
  const [imagen, setImg]=useState('');

  const getFullDetails = async() =>{
  const dataOne =await getDetailedStar(id); 
    setDetails(dataOne.data); 
    getImagen();
  };
  //Imagen//
  const getImagen =async()=>{
    setImg('')
    const dataOne = await axios.get(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
    if(dataOne.status == 200){
      setImg(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);   
    }
  };

 useEffect(()=>{
      getFullDetails();
 },[id]) 
  
  return (
    <> 
      <main className="row main-details">  
       <DetailedShips id={id}>
            <DatosNaves imagen={imagen} details={details} /> 
        </DetailedShips>
      </main> 
    </>
  );
}


