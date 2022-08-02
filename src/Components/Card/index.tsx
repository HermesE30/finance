import React from 'react';
import { numberToMoney } from '../../utils/numberToMoney';
import {
  Container,
  Description,
  IconContainer,
  TitleArea,
  Value,
} from './styles';

type BgTypes = 'normal' | 'positive' | 'negative';

interface Props {
  description: string
  icon?: React.ReactNode
  value: number
  kind?: BgTypes
}

export default function Card({
  description,
  icon,
  value = 0,
  kind = 'normal',
}: Props) {
  return (
    <Container type={kind}>
      <TitleArea>
        <Description type={kind}>{description}</Description>
        <IconContainer>{icon}</IconContainer>
      </TitleArea>
      <Value type={kind}>
        {numberToMoney(value)}
      </Value>
    </Container>
  );
}
