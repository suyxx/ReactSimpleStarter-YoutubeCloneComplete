import React from 'react';

import VideoListItem from './video_list_item';

const videoList = (props) => { //Props contains data recieved from app component video state object

    const videoItems = props.videos.map((video) => {
        return (<VideoListItem
                onVideoSelect = { props.onVideoSelect }
                video = { video }
                key = { video.etag }
                />
        );
    });

    return(
        <div className="col-md-4 col-sm-12">
            <ul className="list-group">
                {videoItems}
            </ul>
        </div>
    );
}

export default videoList;
