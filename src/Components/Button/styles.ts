import styled from 'styled-components';
import { ButtonKind } from '.';

const kindMap = new Map([
  ['primary', 'var(--primary)'],
  ['outline', 'var(--white)']
]);

const hoverMap = new Map([
  ['primary', 'var(--primary-light-color)'],
  ['outline', 'var(--light-gray)']
]);

const borderMap = new Map([
  ['primary', 'none'],
  ['outline', '1px solid var(--primary)']
]);

const colorMap = new Map([
  ['primary', 'var(--white)'],
  ['outline', 'var(--primary)']
]);

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: ${( props: { kind: ButtonKind }) => borderMap.get(props.kind)};
  border-radius: 40px;
  background: ${( props: { kind: ButtonKind } ) => kindMap.get(props.kind)};
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    cursor: pointer;
    background: ${( props: { kind: ButtonKind } ) => hoverMap.get(props.kind)};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  color: ${( props: { color: ButtonKind } ) => colorMap.get(props.color)};
`;