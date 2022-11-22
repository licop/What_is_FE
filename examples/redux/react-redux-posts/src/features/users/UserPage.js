import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectUserById } from './usersSlice'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice'

export const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector(state => selectUserById(state, userId))

  // useSelector 钩子中调用了 filter() 
  // 这意味着 useSelector 总会 返回一个新的数组，所以每次执行以上操作我们的组件都将重新渲染，即使返回的数据并没有发生改变！
  // const postsForUser = useSelector(state => {
  //   const allPosts = selectAllPosts(state)
  //   return allPosts.filter(post => post.user === userId)
  // })
  
  // 使用记忆化函数
  const postsForUser = useSelector(state => selectPostsByUser(state, userId))
  
  const postsTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postsTitles}</ul>
    </section>
  )
}
