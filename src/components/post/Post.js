import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'

export default function post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                <span className="postUsername">Safak Kocaoglu</span>
                <span className='postDate'>5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey! Itsmy first post:</span>
            <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="" className="likeIcon" />
                <img src="assets/heart.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">32 people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
