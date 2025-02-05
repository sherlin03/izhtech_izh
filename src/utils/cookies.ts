import Cookies from 'js-cookie';

export function setToken(token: string, expires: number | Date){
    Cookies.set('token', token, { expires: expires });
}

export function setUser(user: string, expires: number | Date){
    Cookies.set('user', user, { expires: expires });
}

export function getToken() {
    return Cookies.get('token');
 }
 
export function getUser() {
   const user = Cookies.get('user');
    return user ? JSON.parse(user) : null;
 }