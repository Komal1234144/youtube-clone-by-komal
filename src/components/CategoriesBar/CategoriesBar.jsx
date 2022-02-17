import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { videosByCategory , HomeScreenVideos} from '../../redux/actions/videos.action';
import './_categoriesbar.scss';

const keywords = [
  'All', 'React JS', 'Javascript',
  'Php' , 'Music' , 'Web shows',
  'Football' , 'Angular' ,
  'Sports' , 'Dance' , 'Programming',
   'Cartoons' , 'T-series' 
  , 'Cooking',
   'Entreprenurship'
]

const CategoriesBar = () => {
const dispatch = useDispatch()
 const [activeElement , setActiveElement] = useState('All') 
 const handleClick = (value) =>{
     setActiveElement(value)
      value==='All' ?
      dispatch(HomeScreenVideos()) : dispatch(videosByCategory(value))
 }
 
 return(
    <div className='categoriesbar'>
      {keywords.map((value , i)=>{
        return <span key={i}
        className={activeElement===value? 'active' : ''}
        onClick={()=>handleClick(value)}>{value}</span>
      })}
    </div>
  )
};

export default CategoriesBar;
