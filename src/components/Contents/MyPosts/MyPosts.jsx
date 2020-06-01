import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () =>{

  let postData=[
    {id:1, message:'Hi,how are you?',likesCount:15},
    {id:1, message:'i m here first time',likesCount:10}
  ]
  let newPostData = postData.map(el=><Post message = {el.message} likesCount={el.likesCount} />)
    
    return (
      <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
          {newPostData}
      </div>
    </div>
    )
}


export default MyPosts;