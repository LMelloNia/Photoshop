import axios from 'axios';
export const API_SERVER_HOST = "http://localhost:8282";
const prefix = `${API_SERVER_HOST}/api/board`;

export const getBoardList = async () => {
    return await axios.get(`${prefix}/list`);
};

export const getBoardById = async (id) => {
    return await axios.get(`${prefix}/${id}`);
};
export const uploadBoard = async (boardData) => {
    const res = await axios.post(`${prefix}/create`, boardData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.data;
};