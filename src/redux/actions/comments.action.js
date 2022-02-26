import {GET_COMMENTS_REQUEST , GET_COMMENTS_SUCCESS , GET_COMMENTS_FAIL} from './actiontype';
import {request} from '../../axios';

export const getComments=( id)=>async(dispatch , getState)=>{
    try{
        dispatch({
            type : GET_COMMENTS_REQUEST
        })

        const {data} = await request('/commentThreads' , {
           params:{
              part : 'snippet',
              videoId : id
           },
           headers: {
               Authorization : `Bearer ${getState().auth.accesstoken}`
           }       
        })

        console.log(data)
        dispatch({
            type : GET_COMMENTS_SUCCESS,
            payload : data.items
        })
    }catch(err){
       dispatch({
           type : GET_COMMENTS_FAIL,
           payload : err.message
       })
    }
}

export const addComment=(text , id)=>async(dispatch, getState)=>{
    try{ console.log(id)
        const obj ={
            snippet : {
                videoId : id,
                topLevelComment : {
                    snippet : {
                        textOriginal : text
                    }
                }
            }
         }
     
       const res =  await request.post('/commentThreads' , obj , {
            params : {
                part : 'snippet'
            },
            headers: {
                Authorization : `Bearer ${getState().auth.accesstoken}`
            }  
        }) 

        console.log(res)
    }catch(err){
        console.log(err)
    }
}