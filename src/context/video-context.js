import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { videoReducer } from '../reducer'

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, {
        videos: [],
        categories: []
    })

    useEffect(() => {
        (async () => {
            try {
                const { data: { categories } } = await axios.get("/api/categories");
                videoDispatch({ type: "SET_CATEGORIES", payload: categories })
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    
    const {categories} = videoState;
    return (
        <VideoContext.Provider value={{ categories }}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo = () => useContext(VideoContext)

export { useVideo, VideoProvider }