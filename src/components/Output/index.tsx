import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
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
