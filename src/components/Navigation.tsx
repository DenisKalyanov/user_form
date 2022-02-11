import React from 'react';
import { Link } from 'react-router-dom';
import { navMenu, TNavMenu } from '../constants';

const Navigation: React.FC = (): JSX.Element => (
  <nav>
    <ul>
      {navMenu.map((item: TNavMenu) => (
        <li>
          <Link to={item.route}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
