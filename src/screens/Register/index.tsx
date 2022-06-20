import React, { useState } from 'react';
import { Button } from '../../Components/Form/Button';
import { Input } from '../../Components/Form/Input';
import { TransactionTypeButton } from '../../Components/Form/TransactionTypeButton';
import { 
  Container,
  Header,
  Title, 
  Form,
  Fields,
  TransactionsTypes
} from './styles';

export function Register(){
  const [transactionType, SetTransactionType] = useState();

  function handleTransactionsTypeSelect(type: 'up' | 'down'){

  }

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
          <TransactionsTypes>
            <TransactionTypeButton 
              type='up'
              title='Income'
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              type='down'
              title='Outcome'
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
        </Fields>
        <Button title='Button'/>
      </Form>
    </Container>
  );
}