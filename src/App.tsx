import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import { routes, TRoutes } from './routes';
import { signIn } from './store/actions/actions';

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  // Check authorization
  useEffect(() => {
    if (localStorage.Authorization) {
      dispatch(signIn(localStorage.Authorization));
    }
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        {routes.map((item: TRoutes) => (
          <Route path={item.route} element={item.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
