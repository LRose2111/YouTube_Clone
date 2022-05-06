import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";


const VideoPage = () => {
  
  const [searchResults, setSearchResults] = useState('');
  const [videoId, setVideoId] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  
  
  let key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    getSearchResults();
  },[])


  async function getSearchResults(searchTerm='welcome to youtube'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=1&key=${key}`);
  setVideoId(response.data.items[0].id.videoId)
  setDescription(response.data.items[0].snippet.description)
  setTitle(response.data.items[0].snippet.title)
  setSearchResults(response.data.items)
  console.log(response.data.items)
}

  

  

  return (
    <div>
      <div className="video-reg-contain"><Link to="/register" ><b>Register Here</b></Link></div>
      <div><SearchBar getSearchResults={getSearchResults}/></div>
      <div className = 'video-contain'>
        <div className="video-container">
            <div className='video-player'>
              <VideoPlayer videoId={videoId} 
              description={description} 
              title={title}/>
            </div>
            <div>
              <div className='login-alert'><Link to="/login"><b>Click here</b></Link><span> to login/register to see comments</span></div>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default VideoPage;