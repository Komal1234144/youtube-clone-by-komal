import { Grid } from "@mui/material";
import numeral from "numeral";
import moment from "moment";
import './_searchvideo.scss';
import { useDispatch } from "react-redux";
import { useEffect , useState} from "react";
import { request } from "../../axios";
import { getSelectedVideo } from "../../redux/actions/videos.action";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useNavigate } from "react-router-dom";

const SearchVideo = ({video , loading , type , searched , subscreen}) => {

 const {snippet} = video;     
 
 const id = type==='youtube#video' ? video.id.videoId : video.id.channelId;
 const channelId = video?.snippet?.channelId
 const published = snippet&&moment(snippet.publishedAt).fromNow()
 //console.log(id)
 //console.log(channelId)
 const [duration , setDuration] = useState('')
 const [views , setViews] = useState('')
 const [channelIcon , setChannelIcon] = useState('')

 //fetch video details 
 useEffect(async()=>{
  const {data : {items} , data} = await request('/videos', {
    params:{
      part : 'contentDetails,statistics',
      id : id
    }
  })
  
  const timing = items[0]?.contentDetails?.duration;
  const seconds = moment.duration(timing).asSeconds();
  const dur = moment.utc(seconds * 1000).format('mm:ss');
  const viewCount = items[0]?.statistics.viewCount;
 
  id && setDuration(dur);
  id && setViews(numeral(viewCount).format('0 a'))
 
 },[id])

//fetch channel details
 useEffect(async()=>{
  const {data : {items}} = await request('/channels', {
    params : {
      part : 'snippet',
      id : channelId
    }
  })
 

  channelId && setChannelIcon(items[0]?.snippet?.thumbnails?.medium?.url)
 },[channelId])

const navigate = useNavigate()
const handleRelatedVideo=()=>{
 // console.log(video?.snippet?.resourceId?.channelId)
  if(subscreen){
    navigate(`/channel/${video?.snippet?.resourceId?.channelId}`)
  }else if(!subscreen &&  type==='youtube#channel'){
    navigate(`/channel/${id}`)
  }
  else if(!subscreen && type==='youtube#video'){
    navigate(`/watch/${video.id.videoId}`)
  }
 
}

  return (
    
    loading ? 
    <Grid container className={searched ? type==='youtube#channel'? 'searchedchannel': 'searched' : 'searchvideos'} style={{margin : '20px' , width : '100%'}}>
    <SkeletonTheme baseColor='grey' highlightColor="#444">
    <div style={{width:'90%'}}>
      <Skeleton width='100%' height = {150}/>
    </div>
    </SkeletonTheme>  
     </Grid> 
     :
    <Grid container className={searched ? type==='youtube#channel'? 'searchedchannel': 'searched' : 'searchvideos'} onClick={handleRelatedVideo}>
       <Grid item xs={4.5}  className="searchvideos__left">
         <img src={snippet?.thumbnails?.medium.url} alt=""/>
         <span>{type!=='youtube#channel' && duration}</span>
       </Grid>
       <Grid item xs={7.5} className="searchvideos__right">
         <p className="videoname">{snippet?.title}</p>
         <div>{type!=='youtube#channel' ? `${views} views • ${published}` : ''} </div>
         
         {searched && 
          <p>{snippet?.description}</p>
         }
        { subscreen && <p>{video?.contentDetails?.totalItemCount}   videos</p>}
         {(searched && !subscreen) && <div className="channelInfo">
         {searched && <img src={channelIcon} alt=''/>}
         <p>{snippet?.channelTitle}</p>
         </div>}
         {(!subscreen && !searched) && <p>{snippet?.channelTitle}</p>}
       </Grid>
    </Grid>
  )
    
}

export default SearchVideo;