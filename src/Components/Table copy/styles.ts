import styled from 'styled-components';

export const Container = styled.div`
  width: 960px;

`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
`;

export const THead = styled.thead`
display: block;
position: relative;
`;

export const Tr = styled.tr`
  height: 64px;
`;

export const Th = styled.th`
  
`;

export const TBody = styled.tbody`
display: block;
position: relative;
  border-radius: 5px;
  max-height: 400px;
  overflow-y: scroll;
`;

export const Td = styled.td`
  margin: 4px  0;
  padding: 0 20px;
  background: #FFFFFF;

  
  :not(:first-child) {
    text-align: center;
  }

  :first-child {
    border-radius: 5px 0 0 5px;
  }
  :last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export const TdValue = styled.td`
  margin: 4px  0;
  padding: 0 20px;
  background: #FFFFFF;
  text-align: center;
  color:  ${(props:{balance: boolean}) => (props.balance ? '#E92929' : '#49AA26')};
`;
