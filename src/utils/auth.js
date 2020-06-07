// import Cookies from "js-cookie";
// const TokenKey = "token";

export function getToken() {
  //   return Cookies.get(TokenKey);
  return localStorage.getItem('token')
}

export function setToken(token) {
  //   return Cookies.set(TokenKey, token, { expires: 0.5 });
  return localStorage.setItem('token', token)
}

export function removeToken() {
  localStorage.removeItem('token')
  //   Cookies.remove(TokenKey);
}
