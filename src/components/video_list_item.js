import React from 'react';

const VideoListItem = (props) =>{
    //console.log(props);
    return(
        <li className="list-group-item" onClick={ () => {props.onVideoSelect(props.video)} }>
            <div className="media">
                <img src={ props.video.snippet.thumbnails.default.url } alt=" " />
                <div className="media-body">
                    <h5 className="mt-2 ml-2">{ props.video.snippet.title }</h5>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
