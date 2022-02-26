import {auth , provider} from '../../firebase';
import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS , HOME_VIDEOS_FAIL ,
SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS,
RELATED_VIDEOS_REQUEST , RELATED_VIDEOS_SUCCESS , RELATED_VIDEOS_FAIL,
SEARCH_VIDEOS_REQUEST, SEARCH_VIDEOS_SUCCESS, SEARCH_VIDEOS_FAIL,
SUBSCRIBED_CHANNELS_REQUEST, SUBSCRIBED_CHANNELS_SUCCESS, SUBSCRIBED_CHANNELS_FAIL,
CHANNEL_VIDEOS_REQUEST , CHANNEL_VIDEOS_SUCCESS , CHANNEL_VIDEOS_FAIL
} from './actiontype';
import { request } from '../../axios';

export const HomeScreenVideos=()=>async(dispatch, getState)=>{

    try{
         dispatch({
             type :HOME_VIDEOS_REQUEST
         })
     
      const {data} = await request('/videos', {
           params:{
            part : "snippet,contentDetails,statistics",
            chart : 'mostPopular',
            regionCode : 'IN',
            maxResults : 20,
            pageToken : getState().homeVideos.nextPageToken ,
           }
       }) 
      
       dispatch({
           type : HOME_VIDEOS_SUCCESS,
           payload : {
               videos : data.items,
               nextPageToken : data.nextPageToken,
               category : 'All'
            }
        
       })
    }catch(error){
        console.log(error.message)
      dispatch({
          type : HOME_VIDEOS_FAIL,
          payload : error.message
      })
    }
}

export const videosByCategory = (keyword) => async(dispatch, getState) =>{
 try{ console.log('category', keyword)
     dispatch({
        type : HOME_VIDEOS_REQUEST
     })

   const {data} = await request('/search', {
       params:{
        part : 'snippet',
        maxResults : 20,
        q : keyword,
        type : 'video',
        pageToken : getState().homeVideos.nextPageToken
       }
   })
   console.log(data);
   dispatch({
       type : HOME_VIDEOS_SUCCESS,
       payload : {
           videos : data.items,
           nextPageToken : data.nextPageToken,
           category : keyword
        }
       
   })
    }catch(error){
      console.log(error.message)
      dispatch({
          type : HOME_VIDEOS_FAIL,
          payload: error.message
      })
    }
}

export const getSelectedVideo=(id)=>async (dispatch)=>{
    try{
       dispatch({
           type : SELECTED_VIDEO_REQUEST
       })
       
       const {data} = await request('/videos', {
           params:{
             part : 'snippet,contentDetails,statistics',
             id : id
           }
       })
      //console.log(data);
       dispatch({
         type : SELECTED_VIDEO_SUCCESS,
         payload : data.items[0]
       })
    }catch(err){
     dispatch({
       type : SELECTED_VIDEO_FAIL,
       payload : err.message
     })
    }
}

export const getRelatedVideos=(id)=>async (dispatch)=>{
  try{
     dispatch({
         type : RELATED_VIDEOS_REQUEST
     })
     
     const {data} = await request('/search', {
         params:{
           part : 'snippet',
           relatedToVideoId : id,
           type : 'video',
           maxResults : 15
         }
     })
  //  console.log(data);
     dispatch({
       type : RELATED_VIDEOS_SUCCESS,
       payload : data.items
     })
  }catch(err){
    console.log(err.message)
   dispatch({
     type : RELATED_VIDEOS_FAIL,
     payload : err.message
   })
  }
}

export const getVideosBySearch=(keyword)=>async(dispatch)=>{
  try{
   dispatch({
     type : SEARCH_VIDEOS_REQUEST
   })

   const {data} = await request('/search'  , {
     params : {
       part : 'snippet',
       q : keyword,
       type : 'video,channel',
       maxResults : 100
     }
   })
  // console.log(data);
   dispatch({
     type : SEARCH_VIDEOS_SUCCESS,
     payload : data.items
   })
  }catch(err){
      dispatch({
        type : SEARCH_VIDEOS_FAIL,
        payload : err.message
      })
  }
}

//get subscribed channels
export const getSubscribedChannels=()=>async(dispatch, getState)=>{
  try{
   dispatch({
     type : SUBSCRIBED_CHANNELS_REQUEST
   })
   //console.log(getState().auth.accesstoken)
   const {data} = await request('/subscriptions'  , {
     params : {
       part : 'snippet,contentDetails',
       mine : true,
       maxResults : 50
     },
     headers: {
      Authorization : `Bearer ${getState().auth.accesstoken}`
  }   
   })
  //console.log(data);
   dispatch({
     type : SUBSCRIBED_CHANNELS_SUCCESS,
     payload : data.items
   })
  }catch(err){
      dispatch({
        type : SUBSCRIBED_CHANNELS_FAIL,
        payload : err.message
      })
  }
}

//get videos by channel
export const getVideosByChannel=(id)=>async(dispatch, getState)=>{
  try{
   dispatch({
     type : CHANNEL_VIDEOS_REQUEST
   })
 
   const {data : {items}} = await request('/channels'  , {
     params : {
       part : 'snippet,contentDetails',
       id : id
     }
   })
 const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;

 const {data} = await request('/playlistItems'  , {
  params : {
    part : 'snippet,contentDetails',
    playlistId : uploadPlaylistId,
    maxResults : 30
  }
})
  // console.log(data)
   dispatch({
     type : CHANNEL_VIDEOS_SUCCESS,
     payload : data.items
   })
  }catch(err){
    console.log(err.message)
      dispatch({
        type : CHANNEL_VIDEOS_FAIL,
        payload : err.message
      })
  }
}

