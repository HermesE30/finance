import {
  Container,
  IconContainer,
  Label,
} from './styles'

interface ButtonBaseProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: React.ReactNode
  isLoading?: boolean
  onClick?: () => void
  kind: ButtonKind
}

export type ButtonKind = 'primary' | 'outline'

export default function ButtonBase({
  label,
  icon,
  isLoading = false,
  onClick,
  kind = 'primary',
}: ButtonBaseProps) {

  function handleClick() {
    if (onClick) onClick();
  }

  return (
    <Container
      kind={kind}
      onClick={() => handleClick()}
    >
      {
        icon ? (
          <IconContainer>
            {icon}
          </IconContainer>
        ) : null
      }
      <Label color={kind}>
        {!isLoading ? label : 'Aguarde...'}
      </Label>
    </Container>
  )
}
