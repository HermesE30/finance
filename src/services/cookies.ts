import Cookies from 'universal-cookie';

// import product name
const cookieKey = 'stoken';

// get cookie by name
export function getToken() {
  const cookies = new Cookies();
  return cookies.get(cookieKey);
}

export function removeCookie() {
  const cookies = new Cookies();
  return cookies.remove(cookieKey);
}

export function setCookie(tkn: string) {
  const cookies = new Cookies();
  return cookies.set(cookieKey, tkn);
}
