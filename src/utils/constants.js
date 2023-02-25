const myYTAPIKey = process.env.YOUTUBE_VIDEOS_API;

export const YOUTUBE_VIDEOS_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+
myYTAPIKey;

