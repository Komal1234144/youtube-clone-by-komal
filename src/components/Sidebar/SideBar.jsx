import React from 'react';
import {Home,
  Subscriptions , ThumbUp , History, VideoLibrary,
  SentimentVeryDissatisfied, ExitToApp} from '@mui/icons-material';
import './_sidebar.scss';
import { logout } from '../../redux/actions/auth.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SideBar = ({toggle , handleToggle}) => {
 const dispatch = useDispatch();
 const handleLogout=()=>{
     dispatch(logout())
 }

const navigate = useNavigate();
const handleSubscriptionClick=()=>{
  navigate('/feed/subscription');
}
const handleHomeClick=()=>{
  navigate('/')
}
  return(
   <nav className={toggle ? 'sidebar open'  : 'sidebar'}
   onClick={()=>handleToggle(false)}>
     <li onClick={handleHomeClick}>
       <Home sx={{fontSize : 'clamp(20px, 2.5vw , 30px)' , cursor :'pointer'}}/>
       <span>Home</span>
     </li>
     <li>
       <Subscriptions sx={{fontSize : 'clamp(20px, 2.5vw , 30px)' , cursor :'pointer'}}/>
       <span>Subscriptions</span>
     </li>
     <li>
       <ThumbUp sx={{fontSize : 'clamp(20px, 2.5vw , 30px)' , cursor :'pointer'}}/>
       <span>Liked Videos</span>
     </li>
     <li>
       <History sx={{fontSize : 'clamp(20px, 2.5vw , 30px)' , cursor :'pointer'}}/>
       <span>History</span>
     </li>
     <li>
       <VideoLibrary sx={{fontSize : 'clamp(20px, 2.5vw , 30px)' , cursor :'pointer'}}/>
       <span>Library</span>
     </li>
     <li>
       <SentimentVeryDissatisfied sx={{fontSize : 'clamp(20px, 2.5vw , 30px)' , cursor :'pointer'}}/>
       <span>Something</span>
     </li>
     <hr/>
     <li>
       <ExitToApp sx={{fontSize : 'clamp(20px, 2.5vw , 30px)' , cursor :'pointer'}}/>
       <span>Log Out</span>
     </li>
     <hr/>
   </nav> 
  )
};

export default SideBar;
