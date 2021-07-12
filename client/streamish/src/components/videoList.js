import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllWithComments, getVideoSearchResults } from "../modules/videoManager";

const VideoList = () => {
    //state is used to re render to the dom, so if the variable changes it re renders
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllWithComments().then(videos => setVideos(videos));
    };

    const handleInput = (e) => {
        let enteredText = e.target.value;
        //we make a call to the database anytime we type something, we pass that value and the search is made with that value
        //everything in the database that matches the value gets returned, and the state gets set with those videos
        getVideoSearchResults(enteredText).then(videos => setVideos(videos));
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
                <div className="row justify-content-center">+
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoList;

