import React from "react";

const VideoCard = ({ info }) => {
    console.log(info);
    const {snippet, statistics, publishedAt} = info;
    const {channelTitle, title, thumbnails } = snippet;

    var countViews = "";
     if (statistics.viewCount < 1000) {countViews = statistics.viewCount}  
     else {countViews = statistics.viewCount % 1000 + "K views"}

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-xl" alt="card" src={thumbnails.medium.url} />
        <ul>
            <li className="font-bold py-1 text-sm">{title}</li>
            <li className="pt-2 text-sm">{channelTitle}</li>
            <li className="text-sm">{countViews}{publishedAt}</li>
        </ul>
    </div>
  )
};

export default VideoCard;