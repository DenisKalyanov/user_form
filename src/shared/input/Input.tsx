import React from 'react';
import { TInput } from './input-types';

const Input: React.FC<TInput> = ({ value, setValue, name, placeholder }) => (
  <input {...{ placeholder, name, value }} onChange={(e) => setValue(e)} />
);

export default Input;
