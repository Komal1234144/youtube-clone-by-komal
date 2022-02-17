import axios from 'axios';

export const request = axios.create({
 baseURL : "https://youtube.googleapis.com/youtube/v3/",
 params : {
     key : 'AIzaSyBzRmn0NiYn2NTrTnvwgeWt9AkUdhYOKuA'//process.env.REACT_APP_YT_API_KEY
 }
})
