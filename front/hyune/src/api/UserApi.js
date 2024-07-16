import axios from "axios";
export const API_SERVER_HOST = "http://localhost:8282";
const prefix = `${API_SERVER_HOST}/api/user`;

export const registerUser = async (user) => {
    const res = await axios.post(`${prefix}/`, user, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.data;
}

export const loginUser = async (user) => {
    try {
        const res = await axios.post(`${API_SERVER_HOST}/api/login`, user, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // console.log('Login response:', res);
        const token = res.data.token;

        // 토큰을 sessionStorage에 저장
        sessionStorage.setItem('accessToken', token);

        return res.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}