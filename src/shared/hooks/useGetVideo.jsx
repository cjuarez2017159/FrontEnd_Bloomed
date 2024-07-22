import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getVideo as getVideosRequest } from "../../service/api";

export const useVideos = () => {
    const [videos, setVideos] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const getVideos = useCallback(async () => {
        setIsFetching(true);
        try {
            const videoData = await getVideosRequest({
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                }
            });

            if (videoData.error) {
                toast.error(
                    videoData.e?.response?.data || 'Error occurred when fetching videos'
                );
            } else {
                setVideos(videoData.data.videos);
            }
        } catch (error) {
            toast.error('Error occurred when fetching videos');
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        getVideos,
        videos,
        isFetching,
    };
};