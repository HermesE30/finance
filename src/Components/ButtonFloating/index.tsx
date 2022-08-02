import { Container, IconContainer } from './styles';

interface ButtonFloatingProps {
  // icon
  icon?: JSX.Element,
  // propagate on click event
  onClick?: () => void,
  // disable
  isDisabled?: boolean,
}

export default function ButtonFloating({
  icon,
  onClick,
  ...props
}: ButtonFloatingProps) {
  // handle button press event
  function handleClick() {
    if (onClick) onClick();
  }

  return (
    <Container
      onClick={() => handleClick()}
      {...props}
    >
      { /* if icon exists then render */
        icon ? (
          <IconContainer>
            {icon}
          </IconContainer>
        ) : null
      }
    </Container>
  );
}
