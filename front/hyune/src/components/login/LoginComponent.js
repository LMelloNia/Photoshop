import { useState } from "react";
import { loginUser } from "../../api/UserApi"

const initState = {
    userId: "",
    userPassword: ""
}

const LoginComponent = () => {
    const [user, setUser] = useState({ ...initState })

    const handleChangeUser = (e) => {
        user[e.target.name] = e.target.value;
        setUser({ ...user });
    };

    const handleClickLogin = () => {
        console.log(user)
        loginUser(user).then((result) => {
            console.log(result);
            setUser({ ...initState });
        })
        .catch((e) => {
            console.error(e);
        });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                        사용자 아이디
                    </label>
                    <input
                        type="text"
                        id="userId"
                        name="userId"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="사용자 아이디"
                        onChange={handleChangeUser}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userPassword">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="비밀번호"
                        onChange={handleChangeUser}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleClickLogin}
                    >
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;