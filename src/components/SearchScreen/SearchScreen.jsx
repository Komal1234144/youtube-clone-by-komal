import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getVideosBySearch } from "../../redux/actions/videos.action"
import SearchVideo from "../SearchVideo/SearchVideo"
import uniqid from 'uniqid';
import './_searchscreen.scss';

const SearchScreen = () => {
const {query} = useParams()
const dispatch = useDispatch()
 useEffect(()=>{
   dispatch(getVideosBySearch(query))
 }, [query])   

const {loading , videos} = useSelector((state)=>state.searchVideos)

  return (
    <div className="searchscreen">
     {videos?.map((video)=>{
        return <SearchVideo
         loading={loading} 
         video={video} 
         key={uniqid()}
         searched={true}
         type={video.id.kind} />
     })}
    </div>
  )
}

export default SearchScreen