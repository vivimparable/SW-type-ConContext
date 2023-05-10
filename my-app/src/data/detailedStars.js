import axios from 'axios';

const details = async (parametro) => {
 

    const  data  = await axios.get('https://swapi.dev/api/starships/'+parametro);
    return data;
  
};
export default details;