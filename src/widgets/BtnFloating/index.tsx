import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// retrieve modal container element
const btnFloatingRoot = document.getElementById('btnFloating');

interface Props {
  isVisible?: boolean;
  children?: JSX.Element;
}

export default function BtnFloating({
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
    if (el) btnFloatingRoot?.appendChild(el);
    // remove element
    return () => {
      btnFloatingRoot?.removeChild(el);
    };
  }, [el]);

  // create comp
  return isVisible ? ReactDOM.createPortal(
    children,
    el,
  ) : null;
}
