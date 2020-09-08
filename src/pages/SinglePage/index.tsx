import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

import { GoPerson } from 'react-icons/go';

import {
  GiRollingDices,
  GiPerspectiveDiceSixFacesRandom,
} from 'react-icons/gi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  Title,
  Sections,
  Copyright,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Output from '../../components/Output';

import './style_dev.css';

interface SingUpFormData {
  sidesDice: number;
  numberDices?: number;
  name?: string;
}

interface ResultDices {
  value: number;
  order: number;
  type: string;
  name: string;
}

const SinglePage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [resultsDices, setResultsDices] = useState<ResultDices[]>([]);
  const [userName, setUserName] = useState('');

  const { addToast } = useToast();

  const history = useHistory();

  const shortcutDices = [4, 8, 10, 12, 20, 100];

  const handleSubmit = useCallback(
    async ({ name = userName, numberDices = 1, sidesDice }: SingUpFormData) => {
      const data = { name, numberDices, sidesDice };
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          sidesDice: Yup.number().integer('res'),
          numberDices: Yup.number().required(''),
          name: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const resultApi = await api.post('/', data);

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
          title: 'Deu errado',
          type: 'error',
          description: 'Tentar novamente',
        });
      }
    },
    [addToast, history, userName],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Title>
            <h1>D&D Dice</h1>
          </Title>
          <Sections>
            <div>
              <Output>Manual</Output>
              <Form ref={formRef} onSubmit={handleSubmit}>
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
                <Button type="submit">Lançar dados</Button>
                <Input
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  type="text"
                  name="name"
                  icon={GoPerson}
                  placeholder="Seu nome"
                />
              </Form>
            </div>
            <div>
              <Output>Automático</Output>
              {shortcutDices.map(value => {
                return (
                  <Button
                    onClick={() =>
                      handleSubmit({
                        sidesDice: value,
                      })}
                    type="submit"
                  >
                    D-
                    {value}
                  </Button>
                );
              })}
            </div>
            <div>
              <Output> Histórico</Output>

              {resultsDices.map(dice => {
                return (
                  <Output>
                    <span>{`${dice.name}`}</span>
                    <span>{`${dice.type}`}</span>
                    <span>{`Nº ${dice.order}`}</span>
                    <span>{`Valor [ ${dice.value} ]`}</span>
                  </Output>
                );
              })}
            </div>
          </Sections>
          <Copyright>
            Made with Love by GustavoBitten &nbsp;
            <a href="https://github.com/GustavoBitten">(Github)</a>
          </Copyright>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SinglePage;
