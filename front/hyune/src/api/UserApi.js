import axios from "axios";
export const API_SERVER_HOST = "http://localhost:8282";
const prefix = `${API_SERVER_HOST}/api/user`;

export const registerUser = async (user) => {
    const res = await axios.post(`${prefix}/${user}`)
    return res.data
}