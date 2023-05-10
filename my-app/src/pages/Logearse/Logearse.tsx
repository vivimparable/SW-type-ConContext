 import LoginInputs from './componentes/LoginInputs';
import { Contexto } from '../../context/context';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Logearse() {

  const {users,setislogged}=useContext(Contexto);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const navegador = useNavigate();
 
  const onSubmitEvent=(e:any)=>{
    e.preventDefault();
  const foundUser:boolean = users.find((user:{email:string; password:string}) => user.email === email.current?.value && user.password === password.current?.value);
  if (foundUser) {
    setislogged(true);

    alert('Login success');
    navegador('/Naves');
  } else {
    alert("Incorrect email or password.");
  }

  }
  return (
    <>
      <LoginInputs onSubmitEvent={onSubmitEvent}   email={email} password={password} />
    </>
  )
}
