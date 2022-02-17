import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import WatchScreen from './components/WatchScreen/WatchScreen';
import SearchScreen from './components/SearchScreen/SearchScreen';
import Subscription from './components/Subscriptions/Subscription'; 
import ChannelScreen from './components/ChannelScreen/ChannelScreen';
import Login from './components/Auth/Login';
import "./_app.scss";
import {useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter , Routes , Route , Navigate , useNavigate} from 'react-router-dom';

const Layout=({children})=>{
  const [toggle , handleToggle] = useState(false);
  const handleToggleSideBar=()=>{
    return handleToggle((value)=>!value)
  }

  return(
    <>
    <Header handleToggleSideBar={handleToggleSideBar}/>
    <div className='app__container' style={{maxWidth : '100%'}}>
      <SideBar toggle={toggle} handleToggle={handleToggle}/>
      {children}
    </div>
 </>
  )
}

function App() {
const {accesstoken , loading} = useSelector((state)=>state.auth);
const navigate = useNavigate();
useEffect(()=>{
 if(!accesstoken && !loading){
   navigate('/auth')
 }else if(accesstoken && !loading){
   navigate('/');
 }
}, [accesstoken , loading])

  return(
     
       <Routes>
        <Route path='/auth' element={<Login/>} />
         <Route path='/'  element={<Layout children={<HomeScreen/>}/>}/>
         <Route path='/watch/:id'  element={<Layout children={<WatchScreen/>}/>}/>
         <Route path='/search/:query' element={<Layout children={<SearchScreen/>}/>}/>
         <Route path="/feed/subscription" element={<Layout children={<Subscription/>}/>}/>
         <Route path="/channel/:channelId" element={<Layout children={<ChannelScreen/>}/>}/>
         <Route path="*" element={<Navigate to='/'/>}/>
       </Routes>
     
  )
}

export default App;
