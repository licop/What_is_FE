import { createSlice, createAsyncThunk, nanoid, createSelector, current } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { client } from '../../api/client'

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
  current: null
}
// 使用createAsyncThunk创建thunk获取数据
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  // payload 创建者接收部分“{title, content, user}”对象
  async initialPost => {
    // 我们发送初始数据到 API server
    const response = await client.post('/fakeApi/posts', initialPost)
    // 响应包括完整的帖子对象，包括唯一 ID
    return response.data
  }
)

export const fetchPostById = createAsyncThunk(
  'posts/fetchPostById', 
  async postId => {
    const response = await client.get(`/fakeApi/posts/${postId}`)
    return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // 编辑文章
    postUpdated: {
      reducer(state, action) {
        const {id, title, content } = action.payload
        const existingPost = state.posts.find(post => post.id === id)
        if(existingPost) {
          existingPost.title = title
          existingPost.content = content
        }
      },
      prepare(id, title, content) {
        return {
          payload: {
            id,
            title,
            content
          }
        }
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      
      if(existingPost) {
        existingPost.reactions[reaction]++
        if(state.current) {
          state.current.reactions = existingPost.reactions
        } 
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // 我们可以直接将新的帖子对象添加到我们的帖子数组中
        state.posts.push(action.payload)
      })
      .addCase(fetchPostById.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.current = action.payload
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

// 定义selector函数
export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => {
  return state.posts.posts.find(post => post.id === postId)
}

// 记忆化函数
// createSelector 将一个或多个“输入 selector ”函数作为参数，外加一个“输出 selector ”函数。

// 记忆化的 selector 是提高 React + Redux 应用程序性能的宝贵工具，
// 因为它们可以帮助我们避免不必要的重新渲染，并且如果输入数据没有更改，还可以避免执行潜在的复杂或昂贵的计算。
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter(post => post.user === userId)
)
