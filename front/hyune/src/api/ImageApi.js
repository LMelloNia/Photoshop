import axios from "axios";
export const API_SERVER_HOST = "http://localhost:8282";
const prefix = `${API_SERVER_HOST}/api/image`;

// 이미지 업로드 함수
export const uploadImage = async (imageData) => {
    const res = await axios.post(`${prefix}/upload`, imageData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.data;
}

// 사용자 ID로 이미지 가져오기 함수
export const getUserImages = async (userId) => {
    const res = await axios.get(`${prefix}/user/${userId}`);
    return res.data;
}