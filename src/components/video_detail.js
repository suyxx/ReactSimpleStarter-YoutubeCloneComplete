import React from 'react';

const VideoDetail = (props) => {

    if (!props.video){
        return <div>Loading...</div>;
    }

    const videoId = props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log(url);
    return(
        <div className="video-detail col-md-8 col-sm-12">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title={props.video.snippet.title}></iframe>
            </div>
            <div className="details">
                <div className="title">{ props.video.snippet.title }</div>
                <div className="description">{ props.video.snippet.description }</div>
            </div>
        </div>
    );
};

export default VideoDetail;
