import {Grid} from '@mui/material';
import Comments from '../Comments/Comments';
import SearchVideo from '../SearchVideo/SearchVideo';
import './_watchscreen.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import VideoMetaData from '../channelDetail/VideoMetaData';
import { getRelatedVideos, getSelectedVideo } from '../../redux/actions/videos.action';
import uniqid from 'uniqid';

const WatchScreen = () => {
const dispatch = useDispatch();
const video_id = useParams().id;

const {video} = useSelector((state)=>state.selectedVideo);
const {videos , loading} = useSelector((state)=>state.relatedVideos);

useEffect(()=>{
  window.scrollTo(0,0)
  dispatch(getSelectedVideo(video_id))
  dispatch(getRelatedVideos(video_id))
},[video_id])

 

return (
    <div className='watchscreen'>
      <Grid container className='watchscreen__grid'>
        <Grid item xs={12} md={7.5}>
              <VideoMetaData video={video}/>
              <hr/>
               <Comments id={video_id} commentCount={video?.statistics?.commentCount}/>
        </Grid>
       
        <Grid item xs={12} md={4.5}>
         
          { videos?.filter((video)=>{return video.snippet}).
           map((video)=>{
                return(<SearchVideo video={video}
                   key={uniqid()} 
                   loading={loading}
                   type={video.id.kind}/>)
           })  }
           
         </Grid>    
      </Grid>
    </div>
  )
}

export default WatchScreen;