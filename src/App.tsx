import { BrowserRouter } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import Main from './pages/Main';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        transition={Flip}
        theme={'colored'}
      />
      <Main />
    </BrowserRouter>
  );
}
