import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import VideoDescriptions from './VideoDescriptions';

const WatchPage = () => {
  
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(closeMenu());
  }, []);
  
  return (
    <div className="flex flex-col">
    <div className="px-5 pt-5">
      <iframe width="950" height="450" src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
    <div className="px-5 pt-5">
      {/* Video Description */}
    </div>
    <VideoDescriptions />
    <CommentsContainer />
    </div>
  );
};

export default WatchPage;