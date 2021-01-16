<template>
  <div>
    <p>这是 Blog 页面</p>
    <button @click="replace"> replace </button>
    <button @click="goPhoto"> Photo </button>
  </div>
</template>

<script>
// 编程式路由
export default {
  name: 'Blog',
  methods: {
    replace () {
      return this.$router.replace('/index')
    },
    goPhoto () {
      return this.$router.push('/photo')
    }
  }
}
</script>
