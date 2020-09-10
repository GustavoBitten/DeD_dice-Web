import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { Conteiner } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  newDice?: boolean;
}

const Output: React.FC<InputProps> = ({ children, newDice }) => {
  return (
    <Conteiner newDice={newDice}>
      <p>{children}</p>
    </Conteiner>
  );
};

export default Output;
