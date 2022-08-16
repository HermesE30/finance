import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// retrieve portal container element
const portalRoot = document.getElementById('portal');

interface Props {
  // teste
  children: JSX.Element;
}

export default function InPortal({
  children,
}: Props) {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const el = document.createElement('div');

  useEffect(() => {
    // append element
    if (el) portalRoot?.appendChild(el);
    // set mounted
    setHasMounted(true);
    // remove element
    return () => {
      portalRoot?.removeChild(el);
    };
  }, [el]);

  if (!hasMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    children,
    el,
  );
}
