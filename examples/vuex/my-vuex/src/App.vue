<template>
  <div id="app">
    <h1>Vuex - Demo</h1>
    count：{{ $store.state.count }} <br>

    <h2>Getter</h2>
    reverseMsg: {{ $store.getters.reverseMsg }}

    <h2>Mutation</h2>
    <button @click="$store.commit('increate', 2)">Mutation</button>
    <button @click="$store.commit('changeMsg', 'licop')">Change Msg</button>

    <h2>Action</h2>
    <button @click="$store.dispatch('increateAsync', 5)">Action</button>
  </div>
</template>
