import React, { useEffect, useState } from 'react';
import {Menu, Search, Notifications , Apps} from '@mui/icons-material';
import './_header.scss';
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';

const Header = ({handleToggleSideBar}) => {
  const navigate = useNavigate()
  const [text , setText] = useState('');
  const handleSearchText=(e)=>{
    e.preventDefault()
    navigate(`/search/${text}`)
  }

  const {user} = useSelector((state)=>state.auth);
  //const url = user?.photoURL
  //console.log(url);

  return(
    <div className='header'>
      <Menu className='header__menu' onClick={()=>handleToggleSideBar()}/>
      <img className="header__logo" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=''/>
      <form>
        <input className="header__input" type='text' placeholder='search'
        onChange={(e)=>setText(e.target.value)}/>
        <button className="header__button" type='submit'
        onClick={(e)=>handleSearchText(e)}>
         <Search className='header__search'/>
         </button>
      </form>
      <div className="header__icons">
         <Notifications sx={{fontSize : 'clamp(20px, 2.5vw , 30px)' , cursor :'pointer'}}/>
         <Apps sx={{fontSize :  'clamp(20px, 2.5vw , 30px)' , cursor : 'pointer'}}/>
         <img className="header__avatar" src={ user?.photoURL} alt="avatar"/>
      </div>
    </div>
  )
};

export default Header;
