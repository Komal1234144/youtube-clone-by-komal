import axios from 'axios';

export const request = axios.create({
 baseURL : "https://youtube.googleapis.com/youtube/v3/",
 params : {
     key : 'AIzaSyAV3336S0rZrbIc6J8-OSqqtR-dMJ3k3GE'//process.env.REACT_APP_YT_API_KEY
 }
})
