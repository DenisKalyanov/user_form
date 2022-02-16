import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/button/Button';
import './ErrorPage.styles.scss';

const ErrorPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <img src="http://www.dejurka.ru/wp-content/uploads/2009/02/247media.jpg" alt="404 image" />
      <Button title={'Go home'} onClick={() => navigate('/home')} />
    </div>
  );
};

export default ErrorPage;
