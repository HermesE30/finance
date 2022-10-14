import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import { Loading } from './Components';
import { environment } from './environments';
import Main from './pages/Main';
import { getToken } from './services/cookies';
import { Container } from './styles';

export default function App() {
  const [logged, setLogged] = useState<boolean>(false);
  const token = getToken();

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        setLogged(true);
      } else {
        window.location.href = environment.redirect;
      }
    }, 2000);
  }, [token]);

  return logged ? (
    <BrowserRouter>
      <ToastContainer
        transition={Flip}
        theme={'colored'}
      />
      <Main />
    </BrowserRouter>
  ) : (
    <Container>
      <Loading />
    </Container>
  );
}
