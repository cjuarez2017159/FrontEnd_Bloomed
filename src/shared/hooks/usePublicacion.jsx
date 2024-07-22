import { useState, useEffect } from 'react';
import { getpublicaciones } from '../../service/api.jsx';

const usePublicacion = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublicaciones = async () => {
            try {
                const result = await getpublicaciones();
                
                // Verifica si result tiene la estructura esperada
                if (result && result.publications) {
                    setPublicaciones(result.publications);
                } else {
                    setError('Datos no válidos recibidos.');
                }
            } catch (err) {
                setError(err.message || 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        fetchPublicaciones();
    }, []);

    return { publicaciones, loading, error };
};

export default usePublicacion;
