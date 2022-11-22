import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'
import classnames from 'classnames'

import { selectAllUsers } from '../users/usersSlice'

import {
  selectAllNotifications,
  allNotificationsRead
} from './notificationsSlice'

export const NotificationsList = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)

  // useEffect是异步执行，而useLayoutEffect是同步执行的
  // seEffect 的执行时机是浏览器完成渲染之后，而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价
  // useEffect异步执行的优点是，react渲染组件不必等待useEffect函数执行完毕，造成阻塞, 大部分时候使用useEffect。
  // 当出现闪烁时可以使用useLayoutEffect
  // useLayoutEffect(() => {
  //   dispatch(allNotificationsRead())
  // })
  
  const onReadAllNotifications = () => {
    dispatch(allNotificationsRead())
  }

  const renderedNotifications = notifications.map(notification => {
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)

    const user = users.find(user => user.id === notification.user) || {
      name: 'Unknown User'
    }
    
    const notificationClassname = classnames('notification', {
      new: notification.isNew
    }) 

    return (<div key={notification.id} className={notificationClassname}>
      <div>
        <b>{user.name}</b> {notification.message}
      </div>
      <div title={notification.date}>
        <i>{timeAgo} ago</i>
      </div>
    </div>)
  }) 

  return (
    <section className='notificationsList'>
      <h2>Notifications</h2>
      <button type='button' onClick={onReadAllNotifications}>全部已读</button>
      {renderedNotifications}
    </section>
  )
}