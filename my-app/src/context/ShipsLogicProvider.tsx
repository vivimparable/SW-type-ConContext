import { segundoContext } from './context';
import { useState,useEffect } from 'react';
import  axios  from 'axios';
import ships from '../data/stars';
  //Naves View//
interface Props {
  id:String,
  children: React.ReactNode;
}

function ProviderDos({ children  }:any ) {
   
  const [naves, setNaves] = useState<any>([]);
  const [nextUrl, setnextUrl] = useState<string>('');

//llenar Naves//
  const ApiShips = async () =>{
    const shipsContainer = await ships();
    setnextUrl(shipsContainer.next);
    setNaves([...shipsContainer.results]);
  };


//llenar con más naves//
  const MoreShips= async ()=>{
    if(nextUrl){
    const newData = await axios.get(nextUrl);
    setNaves([...naves,...newData.data.results]);
    setnextUrl(newData.data.next);
    }
};

  const  handleScroll=()=> {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop + windowHeight >= documentHeight) {
        MoreShips(); 
    } 
  };
  useEffect(()=>{   
     
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };  
    
  },[handleScroll]);  


  useEffect(()=>{
      ApiShips(); 
  },[]);
  
   

  return (
    <segundoContext.Provider  value={{naves,handleScroll }}>
      {children}
    </segundoContext.Provider >
  );
}

export default ProviderDos;
