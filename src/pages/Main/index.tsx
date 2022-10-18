import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Loading } from '../../Components';
import { environment } from '../../environments';
import { getToken } from '../../services/cookies';
import Home from '../Home';
import { Container } from './style';

export default function Main() {
  const [logged, setLogged] = useState<boolean>(false);
  const tkn = getToken();

  useEffect(() => {
    setTimeout(() => {
      if (tkn) {
        setLogged(true);
      } else {
        window.location.href = environment.redirect;
      }
    }, 2000);
  }, []);

  return logged ? (
    <Routes>
      <Route path={'/'} element={<Home />} />
    </Routes>
  ) : (
    <Container>
      <Loading />
    </Container>
  );
}
