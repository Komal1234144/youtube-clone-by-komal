import {auth , provider} from '../../firebase';
import {LOGIN_REQUEST , LOGIN_SUCCESS , LOGIN_PROFILE , LOGIN_FAILURE , LOG_OUT} from './actiontype';
import { signInWithPopup , GoogleAuthProvider, signOut } from 'firebase/auth';

export const  loginwithgoogle = ()=> async (dispatch)=>{
    
      console.log('entered')
      try {
         dispatch({
        type : LOGIN_REQUEST
      })
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    dispatch({
      type : LOGIN_SUCCESS,
      payload : token
    })
    const profilename = result.user.displayName;
    const photoURL = result.user.photoURL;
    const profile = {profilename , photoURL};

    dispatch({
      type : LOGIN_PROFILE,
      payload : profile
    })
    sessionStorage.setItem('yt-access-token' , token)
    sessionStorage.setItem('yt-user' , JSON.stringify(profile))
  } catch (error) {
    console.log(error.message);
    dispatch({
      type : LOGIN_FAILURE,
      payload : error.message
    })
  }
  
}

export const logout=()=> async (dispatch) =>{
 
    await signOut(auth);
    dispatch({
      type : LOG_OUT
    })
    sessionStorage.removeItem('yt-access-token')
    sessionStorage.removeItem('yt-user');

}
   

  