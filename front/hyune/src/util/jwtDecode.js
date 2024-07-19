import {jwtDecode} from 'jwt-decode';

export const getUserIdFromToken = () => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
        return null;
    }
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.userId;
    } catch (e) {
        console.error('Invalid token', e);
        return null;
    }
}

export const getUserNickFromToken = () => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
        return null;
    }
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.userNick;
    } catch (e) {
        console.error('Invalid token', e);
        return null;
    }
}