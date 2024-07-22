import { useState, useCallback  } from 'react';
import toast from "react-hot-toast";

import { getpublicaciones as getPublicacionesRequest} from '../../service/api.jsx';

export const usePublicacion = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const getPublicaciones = useCallback(async () => {
        setIsFetching(true);
        try {
            const result = await getPublicacionesRequest({
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                }
            });

            if (result.error) {
                setError(result.e?.response?.data || 'Error occurred when fetching publications');
                toast.error(result.e?.response?.data || 'Error occurred when fetching publications');
            } else if (result.data && result.data.publications) {
                setPublicaciones(result.data.publications);
            } else {
                setError('Invalid data received.');
                toast.error('Invalid data received.');
            }
        } catch (err) {
            setError(err.message || 'Unknown error');
            toast.error(err.message || 'Unknown error');
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        getPublicaciones,
        publicaciones,
        isFetching,
        error
    };
};