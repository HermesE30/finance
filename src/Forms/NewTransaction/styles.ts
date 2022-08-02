import styled from 'styled-components';

export const Container = styled.div`
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
    "description"
    "transaction"
    "value"
    "dueDate";
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
