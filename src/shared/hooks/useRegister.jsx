import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../../service/api";
import toast from "react-hot-toast";

const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};


export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const register = async (nombre, apellido, username, email, password, fechaNacimiento) => {
        setIsLoading(true);

        if (!(fechaNacimiento instanceof Date) || isNaN(fechaNacimiento)) {
            setIsLoading(false);
            return toast.error('La fecha de nacimiento no es válida.');
        }

        const formattedDate = formatDate(fechaNacimiento);
        console.log("Fecha de Nacimiento formateada:", formattedDate);

        const response = await registerRequest({
            nombre,
            apellido,
            username,
            email,
            password,
            fechaNacimiento: formattedDate  
        });

        setIsLoading(false);

        if (response.error) {
            console.log("Error en la respuesta:", response);
            return toast.error(
                response.error.response?.data || 'Ocurrió un error al registrar el usuario'
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