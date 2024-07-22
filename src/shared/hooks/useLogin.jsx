import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../service/api.jsx";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (username, password) => {
        setIsLoading(true);

        const response = await loginRequest({
            username,
            password
        });

        setIsLoading(false);

        console.log('Login response:', response);

        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            );
        }

        const { userDetails } = response.data;

        console.log('User details:', userDetails); 

        localStorage.setItem('user', JSON.stringify(userDetails));

        if (userDetails.role === 'admin') {
            navigate('/main');
        } else {
            navigate('/register');
        }
    };

    return {
        login,
        isLoading
    };
};