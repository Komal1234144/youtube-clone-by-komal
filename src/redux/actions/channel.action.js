import { request } from "../../axios";
import { GET_CHANNEL_REQUEST, GET_CHANNEL_SUCCESS , GET_CHANNEL_FAIL, GET_SUBSCRIPTION_STATUS } from "./actiontype";

export const getChannelDetails=(id)=>async(dispatch)=>{
    try{
      dispatch({
          type : GET_CHANNEL_REQUEST
      })

      const {data} = await request('/channels' , {
          params:{
              part : 'snippet,contentDetails,statistics',
              id : id
          }
      })
      dispatch({
        type : GET_CHANNEL_SUCCESS,
        payload : data.items[0]
      })

    }catch(err){
       dispatch({
           type : GET_CHANNEL_FAIL,
           payload : err.message
       })
    }
}

export const getSubscriptionStatus = (id) => async(dispatch , getState)=>{
    try{  //console.log(getState().auth.accesstoken)
     const {data} = await request('/subscriptions', {
         params : {
             part : 'snippet,contentDetails',
             forChannelId : id,
             mine : true
         },
         headers : {
             Authorization : `Bearer ${getState().auth.accesstoken}`
         }
     })
     //console.log(data)
     dispatch({
         type : GET_SUBSCRIPTION_STATUS,
         payload : data.items.length
     })
    }catch(err){
      console.log(err)
    }
}