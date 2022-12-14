import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.h3`
  text-align: center;
  padding: 20px;
`;

export const Info = styled.p`
  width: 100%;
  text-align: center;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
    grid-template-areas:
    "description";
  gap: 16px;
  margin-top: 20px;
`;

export const Description = styled.div`
  grid-area: description;
`;

export const Value = styled.div`
  grid-area: value;
`;

export const DueDate = styled.div`
  grid-area: dueDate;
`;

export const Transaction = styled.div`
  grid-area: transaction;
`;

export const MsgError = styled.label`
  font-size: 14px;
  margin-top: 8px;
  color: var(--danger);
`;
