import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchNotifications, selectAllNotifications } from '../features/notifications/notificationsSlice' 

export const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const unreadNum = notifications.filter(n => !n.read).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }
  let unreadBadge
  if(unreadNum > 0) {
    unreadBadge = (
      <span className="badge">{unreadNum}</span>
    )
  }
   
  return (
    <nav>
      <section>
        <h1>Redux 循序渐进示例</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications {unreadBadge}
            </Link>
          </div>
          <button className='button' onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}