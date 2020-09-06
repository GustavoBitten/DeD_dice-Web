import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

import { FiArrowLeft } from 'react-icons/fi';
import {
  GiRollingDices,
  GiPerspectiveDiceSixFacesRandom,
} from 'react-icons/gi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Result } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Output from '../../components/Output';

interface SingUpFormData {
  sidesDice: number;
  numberDices: number;
}

interface ResultDices {
  value: number;
  order: number;
  type: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [resultsDices, setResultsDices] = useState<ResultDices[]>([]);

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SingUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          sidesDice: Yup.number().integer('res'),
          numberDices: Yup.number().required('E-mail obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const resultApi = await api.post('/', data);
        console.log(resultApi);

        setResultsDices(resultApi.data);

        history.push('/');

        addToast({
          title: 'Dados rodados com sucesso',
          type: 'success',
          description: 'Olhe os resultados abaixo',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          title: 'Deu errado no cadastro',
          type: 'error',
          description: 'Tentar novamente',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Gere seus dados</h1>

            <Input
              type="number"
              name="sidesDice"
              icon={GiPerspectiveDiceSixFacesRandom}
              placeholder="Número de lados"
            />
            <Input
              type="number"
              name="numberDices"
              icon={GiRollingDices}
              placeholder="Quatidade de dados"
            />

            <Button type="submit">Gerar dados</Button>
          </Form>
          <Result>
            {!!resultsDices.length && <h1>Seus resultados</h1>}

            {resultsDices.map(dice => {
              return (
                <Output>{`${dice.type} ___ nº ${dice.order} ___ valor: [ ${dice.value} ] `}</Output>
              );
            })}
          </Result>

          <Link to="/">
            <FiArrowLeft />
            Histórico
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
