<template>
  <div>
    <h1>{{ title }}</h1>
    <nuxt-link to="/about">about</nuxt-link>
    <foo :posts="posts" />
  </div>
  
</template>

<script>
import axios from 'axios'
import Foo from '@/components/Foo'

export default {
  name: 'HomePage',
  components: {
    Foo
  },
  // 当你想要动态页面内容有利于seo或者提升首屏渲染速度的时候就在asyncData中发请求
  // 只能在页面组件（pages）中使用
  async asyncData () {
    // 首次加载在服务端调用
    // 路由导航的的时候的客户端调用
    console.log('asyncData')
    // asyncData没有this，只能用于请求数据，在组价初始化之前被调用
    console.log(this) // undefined
    const res = await axios({
      methods: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    return {
      posts: res.data.posts,
      title: res.res.title
    }
  }
}
</script>
<style></style>