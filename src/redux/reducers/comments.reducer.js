const intialState = {
    loading : false,
    comments : []
}

export const commentsReducer=(state=intialState, action)=>{
    const {type , payload} = action;

 switch(type){
     case 'GET_COMMENTS_REQUEST' : {
         return{
             ...state , 
             laoding : true
         }
     }

    case 'GET_COMMENTS_SUCCESS' : {
        return{
            ...state , 
            loading : false,
            comments : payload
        }
    } 

    case 'GET_COMMENTS_FAIL':{
        return{
            ...state , 
            loading : false,
            error : payload
        }
    }

   default : return state;
 }
}