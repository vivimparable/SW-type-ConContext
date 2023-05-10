import axios from 'axios';

const stars = async () => {
  try {
    const { data } = await axios.get('https://swapi.dev/api/starships/');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default stars;