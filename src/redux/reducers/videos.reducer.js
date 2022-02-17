import { CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, SEARCH_VIDEOS_FAIL, SEARCH_VIDEOS_REQUEST, SEARCH_VIDEOS_SUCCESS, SUBSCRIBED_CHANNELS_FAIL, SUBSCRIBED_CHANNELS_REQUEST, SUBSCRIBED_CHANNELS_SUCCESS } from "../actions/actiontype"


const initialState = {
    videos : [],
    loading : false,
    nextPageToken : '',
    category : 'All'
}

export const homeScreenVideosReducer = (state=initialState , action)=>{
    const {payload} = action
    switch(action.type){
        case 'HOME_VIDEOS_REQUEST' : {
            return{
                ...state ,
                loading : true
            }
        }
        case 'HOME_VIDEOS_SUCCESS' : {
            return{
                ...state,
                loading : false,
                videos : state.category===payload.category ?
                          [...state.videos , ...payload.videos] : payload.videos,
                nextPageToken : payload.nextPageToken,
                category : payload.category
            }
        }
        case 'HOME_VIDEOS_FAIL' : {
            return{
                ...state,
                loading: false
            }
        }
        default : return state;
    }
}

const initialSelectedVideoState= {
    loading : false,
    video : []
}

export const selectedVideosReducer=(state=initialSelectedVideoState, action)=>{
    const {type , payload} = action;

  switch(type){
     case 'SLECTED_VIDEO_REQUEST' : {
         return{
             ...state,
             loading: true
         }
     } 

     case 'SELECTED_VIDEO_SUCCESS' : {
         return{
            ...state,
            loading :false,
            video : payload
         }
     }

     case 'SELECTED_VIDEO_FAIL' : {
         return{
             ...state,
             loading : false,
             error : payload
         }
     }

     default : return state;
  }
}

// related video reducer
const relatedVideosInitialState = {
    loading : false,
    videos : []
}

export const relatedVideosReducer=(state=relatedVideosInitialState, action)=>{
    const {type , payload} = action;

  switch(type){
     case 'RELATED_VIDEOS_REQUEST' : {
         return{
             ...state,
             loading: true
         }
     } 

     case 'RELATED_VIDEOS_SUCCESS' : {
         return{
            ...state,
            loading :false,
            videos : payload
         }
     }

     case 'RELATED_VIDEOS_FAIL' : {
         return{
             ...state,
             loading : false,
             error : payload
         }
     }

     default : return state;
  }
}

const searchVideosInitialState = {
    loading : false,
    videos : [] 
}

export const searchVideosReducer=(state=relatedVideosInitialState, action)=>{
    const {type , payload} = action;

  switch(type){
     case SEARCH_VIDEOS_REQUEST : {
         return{
             ...state,
             loading: true
         }
     } 

     case SEARCH_VIDEOS_SUCCESS : {
         return{
            ...state,
            loading :false,
            videos : payload
         }
     }

     case SEARCH_VIDEOS_FAIL : {
         return{
             ...state,
             loading : false,
             error : payload
         }
     }

     default : return state;
  }
}


//get subscribed channel reducer

const subscribedChannelsInitialState = {
    loading : false,
    videos : []
}
export const subscriberVideosReducer=(state=subscribedChannelsInitialState, action)=>{
    const {type , payload} = action;

  switch(type){
     case SUBSCRIBED_CHANNELS_REQUEST : {
         return{
             ...state,
             loading: true
         }
     } 

     case SUBSCRIBED_CHANNELS_SUCCESS : {
         return{
            ...state,
            loading :false,
            videos : payload
         }
     }

     case SUBSCRIBED_CHANNELS_FAIL : {
         return{
             ...state,
             loading : false,
             error : payload
         }
     }

     default : return state;
  }
}

//get a channels' playlist
const channelVideosInitialState = {
    loading : false,
    videos : []
}
export const channelVideosReducer=(state=subscribedChannelsInitialState, action)=>{
    const {type , payload} = action;

  switch(type){
     case CHANNEL_VIDEOS_REQUEST : {
         return{
             ...state,
             loading: true
         }
     } 

     case CHANNEL_VIDEOS_SUCCESS : {
         return{
            ...state,
            loading :false,
            videos : payload
         }
     }

     case CHANNEL_VIDEOS_FAIL : {
         return{
             ...state,
             loading : false,
             error : payload
         }
     }

     default : return state;
  }
}

