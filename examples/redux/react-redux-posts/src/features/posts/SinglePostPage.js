import React, { useEffect, useState } from "react";
import { useSelector, useDispatch  } from 'react-redux';
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor' 
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from './ReactionButtons'
import { fetchPostById, selectPostById } from './postsSlice'
import { Spinner } from "../../components/Spinner";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  const post = useSelector(state => state.posts.current)
  const postStatus = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPostById(postId))
  }, [postId, dispatch])
  
  let content;
  if(post) {
    if(postStatus === 'loading') {
      content = <Spinner text="loading" />
    } else if(postStatus === 'succeeded') {
      content = (
        <section>
          <article className="post">
            <h2>{post.title}</h2>
            <div>
              <PostAuthor userId={post.user} />
              <TimeAgo timestamp={post.date} />
            </div>
            <p className="post-content">{post.content}</p>
            <ReactionButtons post={post} />
            <Link to={`/editpost/${postId}`} className="button">Edit Post</Link>
          </article>
        </section>
      )
    } else if(postStatus === 'failed') {
      content = (
        <section>
          <h2>页面未找到！</h2>
        </section>
      )
    }
  } else {
    content = <div>{error}</div>
  }
  

  return content
}

