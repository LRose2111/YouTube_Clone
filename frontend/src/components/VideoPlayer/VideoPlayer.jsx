import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {

    let jssrc = `https://www.youtube.com/embed/${props.videoId}`

    return (  
        <div>
            <h3 className="">Current Video</h3>
            <iframe id="ytplayer" type="text/html" width="500" height="360"
                src= {jssrc}
                frameborder="0">
            </iframe>
            <div className = "video-title"><p className="vid-font"><medium className='vid-tight-bold'>Title:</medium> {props.title}</p></div>
            <div className = "video-description"><p className="vid-font"><medium className='vid-tight-bold'>Description:</medium> {props.description}</p></div>
        </div>

    );
}
 
export default VideoPlayer;