import numeral from 'numeral';
import {ThumbUp , ThumbDown} from '@mui/icons-material';
import ShowMoreText from "react-show-more-text";
import moment from 'moment';
import { getChannelDetails, getSubscriptionStatus } from '../../redux/actions/channel.action';
import './_videometadata.scss';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const VideoMetaData = ({video}) => {

const dispatch = useDispatch()
//console.log(video)
const {snippet , statistics} = video
const channelId = snippet?.channelId
//console.log(channelId)
const views = statistics? numeral(statistics.viewCount).format('0 a'):''
const likes = statistics?numeral(statistics.likeCount).format('0 a') : ''
const published = snippet?moment(snippet.publishedAt).fromNow() : ''  

 const {channel , subscriptionStatus} = useSelector((state)=>state.channel)
 const {snippet:channelSnippet , statistics :channelStatistics  } = channel ;
 const subscribers = channelStatistics&&numeral(channelStatistics.subscriberCount).format('0 a');

 useEffect(()=>{
  
   dispatch(getChannelDetails(channelId))
  // dispatch(getSubscriptionStatus(channelId))
       
 }, [channelId])

  return (
   <div> 
    
   <iframe width="100%" 
    className='iframe'   
   src={`https://www.youtube.com/embed/${video?.id}`} 
   frameBorder={0}
   allowFullScreen={true}
 >
 </iframe> 
 
  
  <div className='watchscreen__videoinfo'>
    <p>{snippet?.title}</p>
    <div className='details'>
    <span>{views} views • {published} </span>
    <div>
    <span><ThumbUp/>{likes}</span> 
    <span><ThumbDown/></span></div>
    </div>
  </div>
  <hr/>
      

    <div className='watchscreen__channeldesc'>
    <img src={channelSnippet?.thumbnails?.default?.url} alt="logo"/>
    <div>
      <p className='title'>{channelSnippet?.title}</p>
      <p>{subscribers} subscribers</p>      
    </div>
    <button className={!subscriptionStatus?'btn-red' :'btn-grey'}>
    {subscriptionStatus ? 'SUBSCRIBED' : 'SUBSCRIBE'}
    </button>
  </div>

  <hr/>
  <div className='watchscreen__videodesc'>
    <ShowMoreText
    lines={3}
    more="SHOW MORE"
    less="SHOW LESS"
    className="showmore"
    >
    {snippet?.description}
    </ShowMoreText>
  </div>

  </div> 
  )
}

export default VideoMetaData;