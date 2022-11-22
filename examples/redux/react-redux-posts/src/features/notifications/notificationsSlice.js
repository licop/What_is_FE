import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

// dispatch(fetchNotifications())只能传递一个参数，无论我们传入的是什么，它都将成为 payload creation 回调的第一个参数
// payload creator 的第二个参数是一个' thunkAPI '对象
// 包含dispatch， getState等
// 你可以在 thunk 中使用这些来发起 action，或者从最新的 Redux store 中获取 state （例如在发起 另一个 action 后获取更新后的值）。
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { dispatch, getState }) => {
    const allNotifications = selectAllNotifications(getState())
    // 获取数组的首项
    const [latestNotification] = allNotifications
    const latestTimestamp = latestNotification ? latestNotification.date : ''
    const response = await client.get(
      `/fakeApi/notifications?since=${latestTimestamp}`
    )
    return response.data
  }
)

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    allNotificationsRead(state, action) {
      state.forEach(notification => {
        notification.read = true
        notification.isNew = false
      })
    } 
  },
  
  extraReducers: {
    [fetchNotifications.fulfilled]: (state, action) => {
      state.push(...action.payload)
      state.forEach(notification => {
        notification.isNew = !notification.read
      })
      // 以最新的优先排序
      state.sort((a, b) => b.date.localeCompare(a.date))
    }
  }
})

export default notificationsSlice.reducer

export const { allNotificationsRead } = notificationsSlice.actions
export const selectAllNotifications = state => state.notifications
