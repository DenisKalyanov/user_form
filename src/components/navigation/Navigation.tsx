import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SIGN_OUT } from '../../constants';
import Button from '../../shared/button/Button';
import { signOut } from '../../store/actions/actions';
import { RootState } from '../../store/reducers/rootReducer';
import { TNavMenu } from './navigation.types';

import './Navigation.styles.scss';

const Navigation: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setActiveStyle = (item: string) => location.pathname === item && 'nav-list-item__active';

  const [navMenu, setNavMenu] = useState<TNavMenu[]>([
    { route: '/login', title: 'Login' },
    { route: '/register', title: 'Register' },
  ]);

  const { isAuthorization } = useSelector((state: RootState) => state.commonReducer);

  useEffect(() => {
    if (isAuthorization) {
      setNavMenu([{ route: '/change_password', title: 'Change Password' }]);
    } else {
      setNavMenu([
        { route: '/login', title: 'Login' },
        { route: '/register', title: 'Register' },
      ]);
    }
  }, [isAuthorization]);

  const signOutHandler = () => {
    dispatch(signOut());
    navigate("/login");
  };

  return (
    <nav>
      <ul className="nav-list">
        {isAuthorization && (
          <li onClick={signOutHandler} className="sign-out-button">
            <Button title={SIGN_OUT} />
          </li>
        )}
        {navMenu.map((item: TNavMenu) => (
          <li className={`nav-list-item ${setActiveStyle(item.route)}`}>
            <Link className="nav-list-item-link" to={item.route}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
