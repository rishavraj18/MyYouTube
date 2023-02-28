import React from "react";

const VideoCard = ({ info }) => {
    console.log(info);
    const {snippet, statistics, id} = info;
    const {channelTitle, title, thumbnails } = snippet;

    let calViews = parseInt(statistics.viewCount);
    if (statistics.viewCount < 1000) 
       {calViews = statistics.viewCount}  
    else if(statistics.viewCount > 1000 && statistics.viewCount < 1000000) 
      {calViews = (statistics.viewCount / 1000).toPrecision(3) + "K views"}
    else if(statistics.viewCount >= 1000000) 
      {calViews = (statistics.viewCount / 1000000).toPrecision(2) + "M views"}

    var countViews = calViews.toString();

  return (
    <div className="p-2 m-1 w-52 shadow-lg">
        <img className="rounded-xl cursor-pointer" alt="card" src={thumbnails.medium.url}  onClick={() => playVideo(id)}/>
        <ul>
            <li className="font-bold cursor-pointer text-sm" onClick={() => playVideo(id)}>{title}</li>
            <li className="pt-2 text-sm">{channelTitle}</li>
            <li className="pt-2 text-sm">{countViews}</li>
        </ul>
    </div>
  )
};

function playVideo(id) {
  var url = "https://www.youtube.com/watch?v="+id;
  window.open(url);
};

export default VideoCard;