import React, { useEffect, useState } from 'react'
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
    <div>
      {
      /* { <VideoCard info={videos[0]} /> } */
      videos.length > 0 && <VideoCard info={videos[0]} />
      }
    </div>
  )
};

export default VideoContainer;