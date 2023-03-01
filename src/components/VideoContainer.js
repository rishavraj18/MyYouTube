import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  // Make an API call & State variable is created to update state so that it triggers the reconciliation process
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }
  
  return (
    <div className="flex flex-wrap">
      {
      // videos.length > 0 && <VideoCard info={videos[0]} />
      videos.map(video => (
      <Link to={"/watch?v="+video.id} key={video.id}>
      <VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  )
};

export default VideoContainer;