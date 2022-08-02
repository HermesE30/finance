import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const TableContainer = styled.div`
  max-width: 960px;
  border-collapse: separate;
  border-spacing: 0 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-weight: 800;
`;

export const Column = styled.div`
  width: 25%;
  :first-child {
    text-align: start;
    overflow: hidden;    
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :last-child {
    width: 15%;
  }
`;

export const Tr = styled.tr`
  height: 64px;
`;

export const Body = styled.div`
  border-radius: 5px;
`;

export const ItemContainer = styled.div`
  min-height: 64px;
  max-height: 64px;
  margin: 4px 0;
  padding: 0 20px;
  border-radius: 5px;
  background: #FFFFFF;
  display:  flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemValue = styled.div`
  width: 25%;
  text-align: start;
  color:  ${(props:{ balance: boolean }) => (props.balance ? '#E92929' : '#49AA26')};
`;
