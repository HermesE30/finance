import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F0F2F5;
`;

export const Header = styled.div`
  width: 100%;
  max-height: 238px;
  min-height: 238px;
  background: #00227B;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    max-height: fit-content;
    padding: 30px;
  }
`;

export const ActionContainer = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: flex-end;
`;

export const CardsContainer = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center;
  transform: translateY(70%);
  gap: 24px;

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  padding: 20px 40px;
  width: 100%;
  
  @media (min-width: 1000px) {
    padding: 0;
    margin-top: 90px;
    max-width: 960px;
  }
`;
