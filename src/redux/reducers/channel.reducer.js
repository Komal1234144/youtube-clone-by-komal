const initialState = {
    loading : false,
    channel : {},
    subscriptionStatus : ''
}

export const channelReducer=(state=initialState , action)=>{
    const {type , payload} = action;

 switch(type){
     case 'GET_CHANNEL_REQUEST' : {
         return{
             ...state , 
             laoding : true
         }
     }

    case 'GET_CHANNEL_SUCCESS' : {
        return{
            ...state , 
            loading : false,
            channel : payload
        }
    } 

    case 'GET_CHANNEL_FAIL':{
        return{
            ...state , 
            loading : false,
            error : payload
        }
    }

    case 'GET_SUBSCRIPTION_STATUS' : {
        return{
            ...state , 
            subscriptionStatus : payload===0 ? false : true
        }
    }
   default : return state;
 }
}