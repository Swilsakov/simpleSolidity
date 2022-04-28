import React from 'react';
import { ButtonBody } from './styled';

export const Button = ({ children, disabled, onClick }) => (
  <ButtonBody /*variant={variant}*/ disabled={disabled} onClick={onClick}>
    {children}
  </ButtonBody>
);
