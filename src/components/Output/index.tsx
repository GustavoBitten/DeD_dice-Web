import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { Conteiner } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Output: React.FC<InputProps> = ({ children }) => {
  return (
    <Conteiner>
      <p>{children}</p>
    </Conteiner>
  );
};

export default Output;
