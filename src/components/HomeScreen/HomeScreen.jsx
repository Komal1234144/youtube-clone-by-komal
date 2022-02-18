import React, { useEffect } from 'react';
import CategoriesBar from '../CategoriesBar/CategoriesBar';
import Video from '../Video/Video';
import { Grid } from '@mui/material';
import "./_homescreen.scss";
import { useDispatch, useSelector } from 'react-redux';
import { HomeScreenVideos, videosByCategory } from '../../redux/actions/videos.action';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import uniqid from 'uniqid';

const HomeScreen = () => {
const {videos , category, loading} = useSelector((state)=>state.homeVideos);
const dispatch = useDispatch();
 useEffect(()=>{
  window.scrollTo(0, 0)
  dispatch(HomeScreenVideos())
 },[category]) 

const fetchData =()=>{
  category==='All' ?
  dispatch(HomeScreenVideos()) :
  dispatch(videosByCategory())
}
//console.log(videos)
//console.log(loading);
return(
    <div className='homescreen'>
        
       <CategoriesBar/>
       {!videos && <p>Couldn't fetch data because the api's usage maximum quota exceeded. Sorry for inconvenience</p>}
       <InfiniteScroll
       dataLength={videos.length} 
       next={fetchData}
       hasMore={true}
       loader={<h4>Loading...</h4>}>
       <Grid container className="homescreen__grid" >
      
       { !loading ? 
        videos.map((video)=>{
         return <Grid key={typeof(video.id)==='object' ? video.id.videoId : video.id} className='homescreen__griditem' item xs={12} md={4} lg={3}>
         <Video video={video}/>
         </Grid>
       })  : 
         [...Array(20)].map(()=>{
           return <Grid  key={uniqid()} item xs={12} md={4} lg={3} className='homescreen__griditem'>
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
       </InfiniteScroll>
    </div>
)
};

export default HomeScreen;
