import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleAuth = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');

            if (token) {
                sessionStorage.setItem('accessToken', token);
                navigate("/");
            } else {
                console.error("Token not found");
                navigate("/login");
            }
        };

        handleAuth();
    }, [navigate]);

    return (
        <div>
            Loading...
        </div>
    );
};

export default AuthComponent;