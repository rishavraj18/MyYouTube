import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
  
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(closeMenu());
  }, []);
  return (
  <div>
    <div className="px-5 pt-5">
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
    <div className="px-5 pt-5">
      {/* Video Description */}
    </div>
  </div>
  )
}

export default WatchPage;