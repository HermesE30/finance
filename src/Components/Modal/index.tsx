import ButtonBase from '../Button';
import { ExitIcon } from '../Icons';
// styles
import {
  Container,
  Content,
  HeaderContent,
  FooterContent,
  ContentInnerFooter,
  BackDrop,
  ContentBody,
} from './style';

interface ModalProps {
  // success button label
  buttonLabel?: string;
  // content children
  children: JSX.Element;
  // close modal header children
  headerChildren?: boolean;
  // buttons that will be in the footer
  footerChildren?: boolean;
  isLoading?: boolean;
  onClose: () => void,
  onSucc?: () => void,
}

export default function Modal({
  buttonLabel = '',
  children,
  headerChildren,
  footerChildren,
  isLoading,
  onClose,
  onSucc,
}: ModalProps) {
  function handleClick(): void {
    if (onClose) {
      onClose();
    }
  }

  function handleSuccessClick(): void {
    if (onSucc) onSucc();
  }

  return (
    <Container>
      <BackDrop
        onClick={() => handleClick()}
      />
      <Content>
        {
          headerChildren
            ? (
              <HeaderContent
                onClick={() => handleClick()}
              >
                <ExitIcon />
              </HeaderContent>
            ) : null
        }
        <ContentBody>
          {children}
        </ContentBody>
        {
          footerChildren
            ? (
              <FooterContent>
                <ContentInnerFooter>
                  <ButtonBase
                    label={'Canceler'}
                    kind={'outline'}
                    onClick={() => handleClick()}
                  />
                  <ButtonBase
                    label={buttonLabel || 'Salvar'}
                    kind={'primary'}
                    onClick={() => handleSuccessClick()}
                    isLoading={isLoading}
                  />
                </ContentInnerFooter>
              </FooterContent>
            ) : null
        }
      </Content>
    </Container>
  );
}
