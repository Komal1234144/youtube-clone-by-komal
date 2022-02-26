import axios from 'axios';

export const request = axios.create({
 baseURL : "https://youtube.googleapis.com/youtube/v3/",
 params : {
     key : "AIzaSyBAwtrCISQjDIKeVtiu6tnpEEEZiUOca1w"//process.env.REACT_APP_YT_API_KEY
 }
})
