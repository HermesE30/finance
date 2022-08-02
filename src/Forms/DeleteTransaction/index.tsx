import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../Components';
import Modal from '../../Components/Modal';

import {
  Container, Description, FormContainer, Info, MsgError, Title,
} from './styles';

interface Props {
  onClose: () => void,
  onSubmit?: () => void,
}

// initial values
const initialValues = {
  confirmText: '',
};

const schema = Yup.object().shape({
  confirmText: Yup.string()
    .test(
      'is-delete',
      () => 'Texto de confirmação inválido',
      (value) => value == null || value === 'deletar',
    )
    .min(7, 'Confirmação muito curta')
    .max(7, 'Confirmação muito longa')
    .required('Este campo é obrigatóio!'),
});

export default function DeleteTransaction({
  onClose,
  onSubmit,
}: Props) {
  function handleClose(): void {
    if (onClose) onClose();
  }

  function handleSave() {
    if (onSubmit) onSubmit();
  }

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: () => {
      handleSave();
    },
  });

  return (

    <Modal
      footerChildren
      headerChildren
      onClose={() => handleClose()}
      onSucc={() => formik.handleSubmit()}
      buttonLabel={'Deletar'}
    >
      <Container>
        <Title>
          Deseja realmente apagar o registro?
        </Title>
        <Info>
          Para prosseguir com esta ação, digite &quot;deletar&quot; no campo abaixo.
        </Info>
        <FormContainer>
          <Description>
            <Input
              id={'confirmText'}
              name={'confirmText'}
              placeholder={'Texto de confirmação'}
              type={'text'}
              required
              onChangeText={(value) => formik.setFieldValue('confirmText', value)}
            />
            {
              formik.errors.confirmText
                && formik.touched.confirmText
                && (
                  <MsgError>
                    {formik.errors.confirmText}
                  </MsgError>
                )
            }
          </Description>
        </FormContainer>
      </Container>
    </Modal>
  );
}
