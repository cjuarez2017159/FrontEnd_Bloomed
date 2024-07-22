import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../../service/api";
import toast from "react-hot-toast";

const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const register = async (nombre, apellido, username, email, password, fechaNacimiento) => {
        setIsLoading(true);

        console.log(formatDate)

        // Formatea la fecha antes de enviarla
        const formattedDate = formatDate(fechaNacimiento);

        const response = await registerRequest({
            nombre,
            apellido,
            username,
            email,
            password,
            fechaNacimiento: formattedDate // Usa la fecha formateada aquí
        });

        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al registrar el usuario'
            );
        }

        const { userDetails } = response.data;
        localStorage.setItem('user', JSON.stringify(userDetails));
        navigate('/');
    };

    return {
        register,
        isLoading
    };
};