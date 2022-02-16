import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CHANGE_PASSWORD, ERROR_PASSWORD_DATA } from '../../constants';
import Button from '../../shared/button/Button';
import Input from '../../shared/input/Input';
import { RootState } from '../../store/reducers/rootReducer';
import { validatePassword } from '../../utils/validatePassword';
import UserForm from '../UserForm';

const ChangePasswordForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    passwordOld: string;
    passwordNew: string;
    passwordNewConfirm?: string;
  }>({
    passwordOld: '',
    passwordNew: '',
    passwordNewConfirm: '',
  });
  const { passwordOld, passwordNew, passwordNewConfirm } = formData;

  const { currentUser } = useSelector((state: RootState) => state.commonReducer);

  useEffect(() => {
    if (location.pathname === '/change_password' && !localStorage.Authorization) {
      navigate('/login');
    }
  }, [location.pathname]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
    setErrorConfirmPassword(false);
  };

  const submitForm = (e) => {
    e.preventDefault(e);
    if (
      validatePassword(passwordNew) &&
      validatePassword(passwordNewConfirm) &&
      localStorage[currentUser] === formData.passwordOld &&
      passwordNew === passwordNewConfirm
    ) {
      localStorage[currentUser] = passwordNew;
    } else {
      setError(true);
    }
  };

  const errorMessage = () => {
    if (error) {
      return <p className="user-form-error-message">{ERROR_PASSWORD_DATA}</p>;
    }
  };

  return (
    <form className="user-form" onSubmit={submitForm}>
      {errorMessage()}
      <Input
        isError={error}
        isErrorConfirmPassword={errorConfirmPassword}
        placeholder="Enter your old password"
        name="passwordOld"
        value={passwordOld}
        setValue={onChange}
      />
      <Input
        isError={error}
        isErrorConfirmPassword={errorConfirmPassword}
        placeholder="Enter your new password"
        name="passwordNew"
        value={passwordNew}
        setValue={onChange}
      />
      <Input
        isError={error}
        isErrorConfirmPassword={errorConfirmPassword}
        placeholder="Confirm your new password"
        name="passwordNewConfirm"
        value={passwordNewConfirm}
        setValue={onChange}
      />
      <Button title={CHANGE_PASSWORD} />
    </form>
  );
};

export default ChangePasswordForm;
