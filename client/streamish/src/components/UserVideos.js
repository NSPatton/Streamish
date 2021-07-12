import React, { useEffect, useState } from 'react';
import Video from './Video'
import { getAllVideos, getVideoSearchResults } from '../modules/videoManager';
import { useParams } from "react-router-dom";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));

        const filtervidbyuser = videos.filter(video => video.userProfileId.toString() === id)
        setVideos(filtervidbyuser)
    }

    const handleInput = (e) => {
        let enteredText = e.target.value;
        getVideoSearchResults(enteredText).then(videos => setVideos(videos))
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <>
            <div>
                {/* onChange is assigned to an input to listen for a change in the input field */}
                <input type="text" placeholder="Search" onChange={handleInput} />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoList;
