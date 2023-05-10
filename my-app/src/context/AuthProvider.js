
import {Contexto} from './context'
import { useState,useEffect } from 'react';


const AuthProvider = function({children}){
  let [users, setUsers] = useState(() => {
    const storedusers = JSON.parse(localStorage.getItem('users'));
    return storedusers || [];
  });

  let [islogged, setislogged] = useState(() => {
    const storedislogged = JSON.parse(localStorage.getItem('islogged'));
    return storedislogged || false;
  });
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));  
    localStorage.setItem('islogged', JSON.stringify(islogged));  

  }, [users,islogged]);


  useEffect(() => {
    const storedusers = JSON.parse(localStorage.getItem('users'));
    const storedislogged = JSON.parse(localStorage.getItem('islogged'));
    if (storedusers) setUsers(storedusers);
    if (storedislogged) setislogged(storedislogged);
  }, []);

    return(
      
        <Contexto.Provider value={{users, setUsers,islogged,setislogged}}>
            {children}
        </Contexto.Provider>
    )
}
export default AuthProvider;