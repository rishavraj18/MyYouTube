import React from "react";

const VideoCard = ({ info }) => {
    //console.log(info);
    // const {snippet, statistics, id} = info;
    const {snippet, statistics} = info;
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
    <div className="p-2 m-2 mt-3 w-52 h-52 shadow-md">
        {/* <img className="rounded-xl cursor-pointer" alt="card" src={thumbnails.medium.url}  onClick={() => playVideo(id)}/> */}
        <img className="rounded-xl cursor-pointer" alt="card" src={thumbnails.medium.url}/>
        <ul>
            {/* <li className="font-bold cursor-pointer text-sm" onClick={() => playVideo(id)}>{title}</li> */}
            <li 
            className="h-8 w-48 mt-1 font-bold cursor-pointer text-sm truncate">
            {title}
            </li>
           
            <li className="text-sm">{channelTitle}</li>
            <li className="text-sm">{countViews}</li>
        </ul>
    </div>
  )
};

// Commented to embed YT video play in my app instead of using actual YT
// function playVideo(id) {
//   var url = "https://www.youtube.com/watch?v="+id;
//   window.open(url);
// };

export default VideoCard;