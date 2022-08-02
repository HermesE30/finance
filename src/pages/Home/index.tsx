/* eslint-disable react/no-unstable-nested-components */
import { useCallback, useEffect, useState } from 'react';
import {
  Card,
  ArrowDown,
  ArrowUp,
  Money,
  Table,
  ButtonFloating,
  AddIcon,
} from '../../Components';
import { DeleteTransaction, NewTransactionForm } from '../../Forms';
import { TransactionData } from '../../Interface';
import { getStorage, setStorage } from '../../utils/localStorage';
import handleNotify from '../../utils/notify';
import { ModalScreen } from '../../widgets';
import BtnFloating from '../../widgets/BtnFloating';
import {
  CardsContainer,
  Container,
  Header,
  Content,
} from './styles';

type ModalChildrenTypes = 'create' | 'delete';

export default function Home() {
  const [tData, setTData] = useState<TransactionData[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [revenues, setRevenues] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalChildrenName, setModalChildrenName] = useState<ModalChildrenTypes>('create');
  const [actionData, setActionData] = useState<any>(null);

  function handleValues(data: TransactionData[], kind: string) {
    const rev = data.filter((item: TransactionData) => item.kind === kind);
    const total = rev.reduce((acc: number, curr: TransactionData) => acc + curr.value, 0);
    return (total);
  }

  const refresh = useCallback((dat: TransactionData[]) => {
    // get values by kind
    const rev = handleValues(dat, 'revenue');
    const exp = handleValues(dat, 'expense');

    // set cards values
    setTData(dat);
    setRevenues(rev);
    setExpenses(exp);
    setBalance(rev - exp);
  }, [tData]);

  useEffect(() => {
    const dataStorage: TransactionData[] = getStorage();
    refresh(dataStorage);
  }, []);

  // handle modal state
  function handleShowModal(childrenName: ModalChildrenTypes, data?: any) {
    setActionData(data);
    setModalChildrenName(childrenName);
    setIsVisible(true);
  }

  function handleSubmit(data: TransactionData) {
    setIsVisible(false);
    setTData((prev: TransactionData[]) => {
      const dat = [...prev];
      dat.push(data);
      setStorage(dat);
      refresh(dat);
      return dat;
    });
    handleNotify('success', 'Transação adicionada com sucesso!');
  }

  function handleDeleteItem(id: string) {
    setTData((prev: TransactionData[]) => {
      const dat = prev.filter((item) => item.id !== id);
      setStorage(dat);
      refresh(dat);
      return dat;
    });
    setIsVisible(false);
    handleNotify('success', 'Item removido com sucesso!');
  }

  // children available for modal
  const modalChildren: any = {
    create: () => (
      <NewTransactionForm
        onClose={() => setIsVisible(false)}
        onSubmit={(data) => handleSubmit(data)}
      />
    ),
    delete: (id: string) => (
      <DeleteTransaction
        onClose={() => setIsVisible(false)}
        onSubmit={() => handleDeleteItem(id)}
      />
    ),
  };

  // handle modal children by child name
  function selectModal(name: ModalChildrenTypes, data?: any) {
    // select child according to received name
    const selectedChildren = modalChildren[name];
    // child return
    return selectedChildren(data);
  }

  return (
    <Container>
      <Header>
        <CardsContainer>
          <Card
            description={'Entrada'}
            value={revenues}
            icon={<ArrowUp />}
          />
          <Card
            description={'Saida'}
            value={expenses}
            icon={<ArrowDown />}
          />
          <Card
            description={'Saldo'}
            value={balance}
            kind={'positive'}
            icon={<Money />}
          />
        </CardsContainer>
      </Header>
      <Content>
        <Table
          columns={['Descrição', 'Valor', 'Data', 'Ação']}
          data={tData}
          onDelete={(id) => handleShowModal('delete', id)}
        />
      </Content>
      <ModalScreen isVisible={isVisible}>
        {selectModal(modalChildrenName, actionData)}
      </ModalScreen>
      <BtnFloating isVisible>
        <ButtonFloating
          icon={<AddIcon size={36} />}
          onClick={() => handleShowModal('create')}
        />
      </BtnFloating>
    </Container>
  );
}
