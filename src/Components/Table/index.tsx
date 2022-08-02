import { TransactionData } from '../../Interface';
import { numberToMoney } from '../../utils/numberToMoney';
import ButtonBase from '../Button';
import {
  Body,
  Column,
  Header,
  TableContainer,
  ItemContainer,
  ItemValue,
} from './styles';

interface Props {
  data: TransactionData[]
  columns: string[]
  onDelete: (id: string) => void
}

export default function Table({
  data = [],
  columns,
  onDelete,
}: Props) {
  function handleDelete(id: string) {
    if (onDelete) onDelete(id);
  }
  return (
    <TableContainer>
      <Header>
        {
          columns.map((col: string, index: number) => (
            <Column key={index + col}>{col}</Column>
          ))
        }
      </Header>
      <Body>
        {
          data?.map((rows: any, index: number) => (
            <ItemContainer key={rows.description + index}>
              <Column>{rows.description}</Column>
              <ItemValue balance={rows.kind === 'expense'}>{numberToMoney(rows.value)}</ItemValue>
              <Column>{rows.dueDate}</Column>
              <Column>
                <ButtonBase
                  kind='outline'
                  label='Apagar'
                  onClick={() => handleDelete(rows.id)}
                />
              </Column>
            </ItemContainer>
          ))
        }
      </Body>
    </TableContainer>
  );
}
