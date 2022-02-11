import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { routes, TRoutes } from './routes';

const App: React.FC = (): JSX.Element => {
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
