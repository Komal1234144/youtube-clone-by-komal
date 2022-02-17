import { createStore, applyMiddleware , combineReducers } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import {homeScreenVideosReducer , 
    selectedVideosReducer, 
    relatedVideosReducer , 
    searchVideosReducer,
    subscriberVideosReducer,
    getChannelVideos,
    channelVideosReducer} from './reducers/videos.reducer';
import { commentsReducer } from "./reducers/comments.reducer";
import { channelReducer } from "./reducers/channel.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const rootreducer = combineReducers({
 auth : authReducer,
 homeVideos : homeScreenVideosReducer,
 selectedVideo : selectedVideosReducer,
 relatedVideos : relatedVideosReducer,
 searchVideos : searchVideosReducer,
 channelVideos : channelVideosReducer,
 subscribedChannels : subscriberVideosReducer,
 channel : channelReducer,
 comments : commentsReducer
})

const store = createStore(rootreducer , composeWithDevTools(applyMiddleware(thunk)))

export default store;