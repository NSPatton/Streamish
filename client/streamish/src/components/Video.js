import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
    return (
        <Card >
            <p className="text-left px-2">Posted by: <Link to={`/user/${video.userProfile.id}`}>{video.userProfile.name}</Link></p>
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <Link to={`/ videos / ${video.id}`}>
                    <p>
                        <strong>{video.title}</strong>
                    </p>
                </Link>
                <p>{video.description}</p>
                <p>Comments :</p>
                {video.comments?.map(comment => (<p key={comment.id}>{comment.message}</p>))}
            </CardBody>
        </Card>
    );
};

export default Video;
