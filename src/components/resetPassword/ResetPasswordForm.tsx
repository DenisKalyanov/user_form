import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/change_password' && !localStorage.Authorization) {
      navigate('/login');
    }
  }, [location.pathname]);

  return <div>ResetPasswordForm</div>;
};

export default ResetPasswordForm;
