import React from 'react';
import { Button } from '../../Components/Form/Button';
import { Input } from '../../Components/Form/Input';
import { TransactionTypeButton } from '../../Components/Form/TransactionTypeButton';
import { 
  Container,
  Header,
  Title, 
  Form,
  Fields 
} from './styles';

export function Register(){
  return (
    <Container>
      <Header>
        <Title></Title>
      </Header>
      <Form>
        <Fields>
          <Input 
            placeholder='Nome'
          />
          <Input 
            placeholder='Nome'
          />
          <TransactionTypeButton 
            type='up'
            title='Income'
          />
        </Fields>
        <Button title='Button'/>
      </Form>
    </Container>
  );
}