<template>
<Header_Wob />
<PostComponent msg="Welcome to look Macro dataz App"/>
<Visualization_Wob />
<footer_Wob />
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import Header_Wob from './components/Header_Wob.vue'
import footer_Wob from './components/Footer_Wob.vue'
import Visualization_Wob from './components/Visualization_Wob.vue'



export default {
  name: 'App',
  components: {
    PostComponent,
    Header_Wob,
    Visualization_Wob,
    footer_Wob,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
