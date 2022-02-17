import './_login.scss';
import { loginwithgoogle } from '../../redux/actions/auth.action';
import { useDispatch , useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

const Login = () =>{
  const {accesstoken} = useSelector((state)=>state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogin=()=>{
    dispatch(loginwithgoogle());
  }

  useEffect(()=>{
    accesstoken ? navigate('/') : navigate('/auth')
  }, [accesstoken , navigate])

   return(
     <div className="login">
       <div className="login__main">
          <h1>Youtube Clone</h1>
          <img className="login__logo" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"  alt="logo"/>
          <button onClick={handleLogin}>Login with Google</button>
          <p>This project is made using Youtube API</p>
       </div>
     </div>  
   ) 
}

export default Login;