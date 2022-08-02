import styled from 'styled-components';

export const Container = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0.3125rem 1.0625rem; // 5px 17px
  border: none;
  border-radius: 50%;
  background-color:  var(--primary);
  outline: none;
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  
  &:hover {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
