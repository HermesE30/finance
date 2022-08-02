/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { Input, RadioButton } from '../../Components';
import Modal from '../../Components/Modal';
import { TransactionData } from '../../Interface';
import handleNotify from '../../utils/notify';

import {
  Container, Description, DueDate, FormContainer, MsgError, Transaction, Value,
} from './styles';
import { genID } from '../../utils/genID';

interface Props {
  onClose: () => void,
  onSubmit?: (data: TransactionData) => void,
}

const options = [
  {
    label: 'Entrada',
    value: 'revenue',
  },
  {
    label: 'Saída',
    value: 'expense',
  },
];

// initial values
const initialValues: TransactionData = {
  description: '',
  value: 0,
  dueDate: '',
  kind: '',
};

const schema = Yup.object().shape({
  description: Yup.string()
    .max(25, 'Descrição muito longa')
    .required('Este campo é obrigatóio!'),
  value: Yup.number()
    .min(1, 'Este campo é obrigatóio!'),
  kind: Yup.string()
    .required('Este campo é obrigatóio!'),
  dueDate: Yup.date()
    .max('9999-12-31', 'Data máxima excedida')
    .required('Este campo é obrigatóio!'),
});

export default function NewTransactionForm({
  onClose,
  onSubmit,
}: Props) {
  function handleClose(): void {
    if (onClose) onClose();
  }

  function handleSave(data: TransactionData) {
    const newData = {
      ...data,
      id: genID(),
      dueDate: moment(data.dueDate, 'YYYY-MM-DD').format('DD/MM/YYYY'),
      value: Number(data.value),
    };
    if (onSubmit) onSubmit(newData);
  }

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  return (

    <Modal
      footerChildren
      headerChildren
      onClose={() => handleClose()}
      onSucc={() => formik.handleSubmit()}
    >
      <Container>
        <FormContainer>
          <Description>
            <Input
              id={'description'}
              name={'description'}
              placeholder={'Descrição'}
              type={'text'}
              required
              onChangeText={(value) => formik.setFieldValue('description', value)}
            />
            {
              formik.errors.description
                && formik.touched.description
                && (
                  <MsgError>
                    {formik.errors.description}
                  </MsgError>
                )
            }
          </Description>
          <Transaction>
            <RadioButton
              data={options}
              onSelectedOption={(value) => formik.setFieldValue('kind', value)}
            />
            {
              formik.errors.kind
              && formik.touched.kind
              && (
                <MsgError>
                  {formik.errors.kind}
                </MsgError>
              )
            }
          </Transaction>
          <Value>
            <Input
              id={'value'}
              name={'value'}
              placeholder={'Valor'}
              type={'number'}
              required
              onChangeText={(value) => formik.setFieldValue('value', value)}
            />
            {
              formik.errors.value
              && formik.touched.value
              && (
                <MsgError>
                  {formik.errors.value}
                </MsgError>
              )
            }
          </Value>
          <DueDate>
            <Input
              id={'dueDate'}
              name={'dueDate'}
              type={'date'}
              required
              onChangeText={(value) => formik.setFieldValue('dueDate', value)}
            />
            {
              formik.errors.dueDate
              && formik.touched.dueDate
              && (
                <MsgError>
                  {formik.errors.dueDate}
                </MsgError>
              )
            }
          </DueDate>
        </FormContainer>
      </Container>
    </Modal>
  );
}
