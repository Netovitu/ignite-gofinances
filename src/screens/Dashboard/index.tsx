import React from 'react';
import { HighlightCard } from '../../Components/HighlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title
 } from './styles'

export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{uri:'https://avatars.githubusercontent.com/u/57734781?v=4'}}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Neto</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards>  
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de Abril"
        />
        <HighlightCard
          type="down" 
          title="Saídas" 
          amount="R$ 1.259,00" 
          lastTransaction="Última entrada dia 03 de Abril"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 16.141,00" 
          lastTransaction="01 à 18 de Abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>

        </Title>
      </Transactions>
    </Container>
  )
}