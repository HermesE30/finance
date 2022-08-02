import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// retrieve modal container element
const modalRoot = document.getElementById('modal');

interface Props {
  isVisible?: boolean;
  children?: JSX.Element;
}

export default function ModalScreen({
  // set visibility of the component
  isVisible = false,
  // component children
  children,
}: Props) {
  // element
  const el = document.createElement('div');
  // on initialization
  useEffect(() => {
    // append element
    if (el) modalRoot?.appendChild(el);
    // remove element
    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);

  // create comp
  return isVisible ? ReactDOM.createPortal(
    children,
    el,
  ) : null;
}
