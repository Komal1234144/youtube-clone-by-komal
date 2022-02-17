import './_comments.scss';
import numeral from 'numeral';
import moment from 'moment';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getComments } from '../../redux/actions/comments.action';
import ShowMoreText from 'react-show-more-text';
const Comments = ({id , commentCount}) => {

const dispatch = useDispatch();

const {comments} = useSelector((state)=>state.comments);

useEffect(()=>{
   dispatch(getComments(id))
},[])

const [text , setText] = useState('');
const handleComment=(e)=>{
  e.preventDefault();
  console.log('text')
  console.log(id)
  dispatch(addComment(text , id))
  setTimeout(()=>{
     dispatch(getComments(id))
  },3000)
}
const {user} = useSelector((state)=>state.auth);
  const url = user?.photoURL

  return (
   <div className='comments'>
     <p>{commentCount} comments</p>
     <form type='submit' onSubmit={(e)=>handleComment(e)}>
       <img src={url} alt="avatar"/>
       <input placeholder='Write a comment...' onChange={(e)=>setText(e.target.value)}/>
       <button>Comment</button>
     </form>
     {
        comments?.map((comment)=>{
          //console.log(comment)
          const snippet = comment.snippet.topLevelComment.snippet;
          const published = snippet && moment(snippet.publishedAt).fromNow()
    return <div className='comment' key={uniqid()}>
             <img src={snippet?.authorProfileImageUrl} alt=""/>
             <div>
             <p>{snippet?.authorDisplayName} • {published} </p>
             <ShowMoreText
             lines={2}
             more="SHOW MORE"
             less="SHOW LESS"
             className="showmore"
             >
             <p>{snippet?.textDisplay}</p>
             </ShowMoreText>
             </div>
               
           </div> 
        })
     }
   </div>
  )
}

export default Comments