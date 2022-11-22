import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor' 
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from './ReactionButtons'
import { Spinner } from '../../components/Spinner'
import { selectAllPosts, fetchPosts } from './postsSlice'

let PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
    </article>
  )
}

// React.memo 的作用是 缓存 组件，它会对传入的组件加上缓存功能生成一个新组件，然后返回这个新组件。 
// 在传给组件的props 的属性和值没有发生改变的情况下，它会使用最近一次缓存的结果，而不会进行重新的渲染，实现跳过组件渲染的效果。
// 当父组件重新渲染，没必要重新渲染的子组件可以使用memo包起来。
PostExcerpt = React.memo(PostExcerpt)

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  // 根据时间日期进行排序

  const postStatus = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if(postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])
  
  let content
  
  if(postStatus === 'loading') {
    content = <Spinner text="loading" />
  } else if(postStatus === 'succeeded') {
    // 按时间顺序排序
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    content = orderedPosts.map(post => (
      <PostExcerpt post={ post } />
    ))

  } else if(postStatus === 'failed') {
    content = <div>{error}</div>
  }
  
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
