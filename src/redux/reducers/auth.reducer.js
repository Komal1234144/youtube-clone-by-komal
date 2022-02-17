const initialState = {
 accesstoken : sessionStorage.getItem('yt-access-token')? sessionStorage.getItem('yt-access-token') : null,
 user : sessionStorage.getItem('yt-user')?JSON.parse(sessionStorage.getItem('yt-user')):null ,
 loading : false
}

export const authReducer = (state = initialState , action) => {
 switch(action.type){
     case 'LOGIN_REQUEST' : {
       return {
        ...state,
         loading : true
       } 
     }
     case 'LOGIN_SUCCESS': {
         return {
            ...state,
            accesstoken : action.payload,
            loading : false
         }
     }
     case 'LOGIN_PROFILE' : {
         return{
           ...state ,
           user : action.payload
         }
     }
     case 'LOGIN_FAILURE' : {
         return{
          ...state,
          accesstoken : null,
          loading : false,
          error : action.payload   
         }
     }  
     case 'LOG_OUT' : {
       return {
         ...state , 
         accesstoken : null,
         user : null
       }
     }
     default :{ return state }
     
 }
}