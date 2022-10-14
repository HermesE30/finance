import { useCallback, useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Loading } from '../../Components';
import { environment } from '../../environments';
import { getToken, setCookie } from '../../services/cookies';
import Home from '../Home';
import { Container } from './style';

export default function Main() {
  const [logged, setLogged] = useState<boolean>(false);
  const { search } = useLocation();
  const tkn = getToken();
  // navigation
  const navigate = useNavigate();

  const handleCookie = useCallback((cookie: string) => {
    const token = cookie.split('=')[1];
    setCookie(token);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (tkn) {
        setLogged(true);
      } else if (search) {
        handleCookie(search);
        setLogged(true);
        navigate('/');
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
