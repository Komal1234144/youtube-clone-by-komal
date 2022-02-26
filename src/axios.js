import axios from 'axios';

export const request = axios.create({
 baseURL : "https://youtube.googleapis.com/youtube/v3/",
 params : {
     key : "AIzaSyC07ecfH6-X8Hp1arNJuS1dyv66y_p32us"//process.env.REACT_APP_YT_API_KEY
 }
})
