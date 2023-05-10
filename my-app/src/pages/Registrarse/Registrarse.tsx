import React, { useContext, useEffect, useRef, useState } from 'react';
import { segundoContext,Contexto } from '../../context/context';
import RegistroForm from './componentes/RegistroForm';

export default function Registrarse(): JSX.Element {
  const { users, setUsers } = useContext(Contexto);
  const [msj, setMsj] = useState<string>('');
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const onSubmitEventRegisto = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setMsj('');
    if (
      email.current?.value &&
      password.current?.value &&
      email.current.value.length > 0 &&
      password.current.value.length > 0
    ) {
      const foundUser = users.find(
        (user:any) =>
          user.email === email.current?.value && user.password === password.current?.value
      );
      const foundUser2 = users.find((user:any) => user.email === email.current?.value);
      if (!foundUser) {
        setUsers([...users, { email: email.current.value, password: password.current.value }]);
        setMsj('Registrado!!');
      } else if (foundUser2) {
        setMsj('Este user ya está registrado con ese email');
      }
    }
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <RegistroForm onSubmitEventRegisto={onSubmitEventRegisto} email={email} password={password} msj={msj} />
    </>
  );
}