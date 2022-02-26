import {Visibility} from '@mui/icons-material';
import moment from 'moment';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../../axios';
import {useDispatch} from 'react-redux';
import { getSelectedVideo} from '../../redux/actions/videos.action';
import './_video.scss';

const Video = ({video , channelScreen}) => {
//console.log(video)
const {id ,
      snippet : {channelId , channelTitle , publishedAt , 
                thumbnails : {medium} , title}, } = video
const video_id = channelScreen ? video?.snippet?.resourceId?.videoId : typeof(id)==='object' ? id.videoId : id;


const [duration , setDuration] = useState(null)
const [views , setViews] = useState(null)
const [published , setPublished] = useState(null);
const [channelIcon , setChannelIcon] = useState(null)


useEffect(async()=>{
 const {data : {items} , data} = await request('/videos', {
   params:{
     part : 'contentDetails,statistics',
     id : video_id
   }
 })
// console.log(data)
 const timing = items[0].contentDetails.duration;
 const seconds = moment.duration(timing).asSeconds();
 const dur = moment.utc(seconds * 1000).format('mm:ss');
 const viewCount = items[0].statistics.viewCount;

 setDuration(dur);
 setPublished(moment(publishedAt).fromNow());
 setViews(numeral(viewCount).format('0 a'))

},[ publishedAt , video_id])

useEffect(async()=>{
 const {data : {items}} = await request('/channels', {
   params : {
     part : 'snippet',
     id : channelId
   }
 })
 //console.log(items[0].snippet.thumbnails.medium)
 setChannelIcon(items[0].snippet.thumbnails.medium.url)
},[channelId])

const navigate = useNavigate();

const handleVideo=()=>{ 
  navigate(`/watch/${video_id}`);
}

  return(
    <div className='video' onClick={handleVideo}>
       <div className='video__top'>
         <img src={medium.url} alt=""/>
         <span>{duration}</span>
       </div>
       <div className="video__title">{title}</div>
       <div className='video__desc'>
         <Visibility style={{fontSize:'clamp(18px , 2vw , 25px)'}}/>
         <span>{views} views • {published} </span>
       </div>
       <div className='video__channel'>
         <img src={channelIcon}
          alt="" />
         <span>{channelTitle}</span>
       </div>
    </div>
  )
};

export default Video;
