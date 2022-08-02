import styled from 'styled-components';

type BgTypes = 'normal' | 'positive' | 'negative';

const kindMap = new Map([
  ['normal', '#FFFFFF'],
  ['positive', '#3949AB'],
  ['negative', '#E92929'],
]);

export const Container = styled.div`
  max-width: 305px;
  min-width: 305px;
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 14px 20px;
  background: ${(props: { type: BgTypes }) => kindMap.get(props.type)};
`;

export const TitleArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Description = styled.span`
  font-size: 16px;
  color: ${(props: { type: BgTypes }) => (props.type !== 'normal' ? '#FFFFFF' : '#969CB2')};
`;

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items:center;
  justify-content: center;
`;

export const Value = styled.span`
  font-size: 30px;
  color: ${(props: { type: BgTypes }) => (props.type !== 'normal' ? '#FFFFFF' : '#363F5F')};
`;
