import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999999;
`;

export const Content = styled.div`
  width: 80%;
  position: relative;
  padding: 0px 1.25rem 1.25rem 1.25rem;
  background: var(--white);
  border-radius: 5px;
  
 @media (min-width: 1000px) {
  width: 40%;
 }
  
`;

export const ContentBody = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: scroll;

  @media (min-width: 1000) {
    max-height: 500px;
    overflow: hidden;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 0.625rem;
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 1.25rem;
`;

export const ContentInnerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
`;
