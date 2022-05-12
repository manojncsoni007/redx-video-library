import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { videoReducer } from '../reducer'
import { getFilteredVideo } from "../utils";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, {
        video: [],
        categories: [],
        categoryFilter: 'All'
    })

    useEffect(() => {
        (async () => {
            try {
                const { data: { categories } } = await axios.get("/api/categories");
                videoDispatch({ type: "SET_CATEGORIES", payload: categories })
                const { data } = await axios.get("/api/videos");
                videoDispatch({ type: "SET_VIDEOS", payload: data.videos });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const { categories, video, categoryFilter } = videoState;
    const filteredVideo = getFilteredVideo(video,categoryFilter);

    return (
        <VideoContext.Provider value={{
            categories,
            video,
            filteredVideo,
            categoryFilter,
            videoDispatch
        }}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo = () => useContext(VideoContext)

export { useVideo, VideoProvider }