import React, { useEffect, useState } from 'react';
import Video from './Video'
import { getAllWithComments, getVideoSearchResults } from '../modules/videoManager';
import { useParams } from "react-router-dom";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    const getVideos = () => {
        getAllWithComments().then(videos => setVideos(videos));
    };

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
                    {/* id from useparams is a string and userProfileId are different types, and == allows us to compare the two */}
                    {videos.filter(video => video.userProfileId == id).map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoList;
