<template>
  <div id="app">
    <div>{{name}}</div>
    <h2>list</h2>
    <ul>
      <li v-for="item in list">
        {{item.title}}
      </li>
    </ul>
    <h2>test</h2>
    <ul>
      <li v-for="(item, index) in test" :key="index">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'server-side',
  async asyncData({ params }) {
    let { data } = await axios.get(`https://www.v2ex.com/api/topics/hot.json`)
    return { list: data }
  },
  data() {
    return {
      name: 'server',
      test: [
        {
          title: 'test1'
        },
        {
          title: 'test2'
        }
      ]
    }
  }
}
</script>
