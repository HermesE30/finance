import { numberToMoney } from '../../utils/numberToMoney';
import {
  TableContainer,
  TBody,
  Td,
  TdValue,
  Th,
  THead,
  Tr,
} from './styles';

interface Row {
  description: string
  value: number
  dueDate: string
  kind: string
}

interface Props {
  data: Row[]
  columns: string[]
}

export default function Table({
  data = [],
  columns,
}: Props) {
  return (
    <TableContainer>
      <THead>
        <Tr>
          {
            columns.map((col) => (
              <Th>{col}</Th>
            ))
          }
        </Tr>
      </THead>
      <TBody>
        {
          data?.map((rows: Row) => (
            <Tr>
              <Td>{rows.description}</Td>
              <TdValue balance={rows.kind === 'expense'}>{numberToMoney(rows.value)}</TdValue>
              <Td>{rows.dueDate}</Td>
            </Tr>
          ))
        }
      </TBody>
    </TableContainer>
  );
}
