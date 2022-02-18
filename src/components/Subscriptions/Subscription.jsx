import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscribedChannels} from '../../redux/actions/videos.action';
import SearchVideo from '../SearchVideo/SearchVideo';
import uniqid from 'uniqid';
import './_subscription.scss';

const Subscription = () => {

const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(getSubscribedChannels()) 
 },[]) 

 const {videos , loading} = useSelector((state)=>state.subscribedChannels);
 //console.log(videos)

 
  return (
    <div className='subscription'>
    {videos?.map((video)=>{
      return <SearchVideo
       loading={loading} 
       video={video} 
       key={uniqid()}
       subscreen
       searched
       type = {'youtube#channel'}
        />
   })}
    </div>
  )
}

export default Subscription