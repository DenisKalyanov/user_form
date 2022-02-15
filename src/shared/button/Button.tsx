import React from 'react';
import { TButton } from './button-types';

import './Button.scss';

const Button: React.FC<TButton> = ({title, onClick}) => (
  <button className='button' onClick={onClick}>{title}</button>
);

export default Button;
