import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/button/Button';
import Input from '../shared/input/Input';
import {
  ERROR_CONFIRM_PASSWORD,
  ERROR_FORM_DATA,
  FORGOT_PASSWORD,
  REGISTER,
  SIGN_IN,
} from '../constants';
import { validatePassword } from '../utils/validatePassword';
import { isEmpty } from '../utils/isEmpty';
import { useDispatch } from 'react-redux';
import { register, signIn } from '../store/actions/actions';

import './UserForm.styles.scss';

const inputs = {
  login: {
    emailPlaceholder: 'Login (email)',
    emailName: 'login',
    passwordPlaceholder: 'Password',
    passwordName: 'password',
    buttonTitle: SIGN_IN,
  },
  register: {
    emailPlaceholder: 'Login (email)',
    emailName: 'login',
    passwordPlaceholder: 'Password',
    passwordName: 'password',
    passwordConfirmPlaceholder: 'Confirm password',
    passwordConfirmName: 'confirmPassword',
    buttonTitle: REGISTER,
  },
};

const UserForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState<boolean>(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false);
  let key = location.pathname.replace(/^./, '');

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

  useEffect(() => {
    setFormData({
      login: '',
      password: '',
      confirmPassword: '',
    });
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/login' && localStorage.Authorization) {
      navigate('/home');
    }
  }, [location.pathname]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
    setErrorConfirmPassword(false);
  };

  const submitForm = (e) => {
    e.preventDefault(e);
    if (location.pathname.includes('login')) {
      if (
        isEmpty(formData.login) &&
        validatePassword(formData.password) &&
        localStorage[formData.login] === formData.password
      ) {
        dispatch(signIn(formData.login));
        navigate('/home');
      } else {
        setError(true);
      }
    } else if (location.pathname.includes('register')) {
      if (isEmpty(formData.login) && validatePassword(formData.password)) {
        if (formData.password === formData.confirmPassword) {
          dispatch(register(formData));
          navigate('/home');
        } else {
          setErrorConfirmPassword(true);
        }
      } else {
        setError(true);
      }
    }
  };

  const errorMessage = () => {
    if (error) {
      return <p className="user-form-error-message">{ERROR_FORM_DATA}</p>;
    }
    if (errorConfirmPassword) {
      return <p className="user-form-error-message">{ERROR_CONFIRM_PASSWORD}</p>;
    }
  };


  return (
    <form className="user-form" onSubmit={submitForm}>
      {errorMessage()}
      {!location.pathname.includes('change_password') && (
        <Input
          isError={error}
          type="email"
          placeholder={inputs[key].emailPlaceholder}
          name={inputs[key].emailName}
          value={login}
          setValue={onChange}
        />
      )}
      <Input
        isError={error}
        isErrorConfirmPassword={errorConfirmPassword}
        placeholder={inputs[key].passwordPlaceholder}
        name={inputs[key].passwordName}
        value={password}
        setValue={onChange}
      />
      {/* {location.pathname.includes('change_password') && (
        <>
          <Input
            isError={error}
            isErrorConfirmPassword={errorConfirmPassword}
            placeholder={inputs[key].placeholderNewPassword}
            name={inputs[key].passwordNewName}
            value={password}
            setValue={onChange}
          />
          <Input
            isError={error}
            isErrorConfirmPassword={errorConfirmPassword}
            placeholder={inputs[key].placeholderConfirmNewPassword}
            name={inputs[key].passwordConfirmNewName}
            value={password}
            setValue={onChange}
          />
        </>
      )} */}
      {location.pathname.includes('register') ? (
        <Input
          isError={error}
          isErrorConfirmPassword={errorConfirmPassword}
          placeholder={inputs[key].passwordConfirmPlaceholder}
          name={inputs[key].passwordConfirmName}
          value={confirmPassword}
          setValue={onChange}
        />
      ) : (
        <span className="user-form-forgot-password" onClick={() => navigate('/forgot_password', { replace: true })}>
          {FORGOT_PASSWORD}
        </span>
      )}
      <Button title={location.pathname.includes('login') ? SIGN_IN : REGISTER} />
    </form>
  );
};

export default UserForm;
