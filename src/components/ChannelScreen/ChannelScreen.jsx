import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideosByChannel } from '../../redux/actions/videos.action';
import {getChannelDetails, getSubscriptionStatus} from '../../redux/actions/channel.action';
import Video from '../Video/Video';
import uniqid from 'uniqid';
import './_channelscreen.scss';
import { Grid } from '@mui/material';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import numeral from 'numeral';

const ChannelScreen = () => {

const {channelId} = useParams()
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getVideosByChannel(channelId))
  dispatch(getChannelDetails(channelId))
 // dispatch(getSubscriptionStatus(channelId))
}, [channelId])

const {videos , loading} = useSelector((state)=>state.channelVideos);  
const {snippet , statistics} = useSelector((state)=>state.channel.channel);
const  {subscriptionStatus} = useSelector((state)=>state.channel)
  return (
    <div className='channelscreen'>
    
    <div className='channelscreen__channelInfo'>
     <div>
    <img src={snippet?.thumbnails?.default?.url} alt=''/>
    <div>
      <p className='title'>{snippet?.title}</p>
      <p>{numeral(statistics?.subscriberCount).format('0 a')} subscribers</p>
    </div>
    </div>
    <button className={!subscriptionStatus?'btn-red' :'btn-grey'}>
    {subscriptionStatus ? 'SUBSCRIBED' : 'SUBSCRIBE'}
    </button>
  </div>
   <hr/>

    <Grid container className="channelscreen__grid" >
    { !loading ?

      videos.map((video)=>{
       return <Grid key={uniqid()} className='channelscreen__griditem' item xs={12} md={4} lg={3}>
       <Video video={video} channelScreen/>
       </Grid>
     })  : 
       [...Array(30)].map(()=>{
         return <Grid  key={uniqid()} item xs={12} md={4} lg={3} className='channelscreen__griditem'>
         <SkeletonTheme baseColor='grey' highlightColor="#444" >
            <div>
             <Skeleton height={150} width={220}/>
             <div style={{display:'flex' , width:'100%', alignItems:'center' , 
             justifyContent:'space-between' , margin:'7px 0 20px 0'}} >
             <Skeleton circle={true} width={40} height={40} marginRight={50}/>
             <Skeleton height={40} width={170} />
             </div> 
             </div> 
          </SkeletonTheme>
       </Grid>
       })
       
       }
       </Grid>
    </div>
  )
}

export default ChannelScreen