import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Input from '../shared/input/Input';

const UserForm: React.FC = (): JSX.Element => {
  let location = useLocation();

  const [formData, setFormData] = useState<{
    login: string;
    password: string;
    confirmPassword?: string;
  }>({
    login: '',
    password: '',
    confirmPassword: '',
  });
  const { login, password, confirmPassword } = formData;

  useEffect(()=>{
    setFormData({
      login: '',
      password: '',
      confirmPassword: '',
    })
  },[location.pathname])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Input placeholder="Login" name="login" value={login} setValue={onChange} />
      <Input placeholder="Password" name="password" value={password} setValue={onChange} />
      { location.pathname === "/register" && <Input placeholder="Confirm password" name="confirmPassword" value={confirmPassword} setValue={onChange} />}
    </>
  );
};

export default UserForm;
