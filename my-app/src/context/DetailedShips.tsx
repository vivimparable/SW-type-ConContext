import { tercerContext } from './context';
import { useState,useEffect } from 'react';
import  axios  from 'axios';
import getDetailedStar from '../data/detailedStars'

function Providertres({ children,id  }:any ) {
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
    <tercerContext.Provider  value={{imagen,details }}>
      {children}
    </tercerContext.Provider >
  );
}

export default Providertres;
