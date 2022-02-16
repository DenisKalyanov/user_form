import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './HomePage.styles.scss';

const HomePage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname === "/home" && !localStorage.Authorization){
      navigate('/login');
    }
  }, [location.pathname]);
  
  return (
    <div className='home-page'>Hello, you are logged in!</div>
  )
}

export default HomePage;