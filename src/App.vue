<template>
  <div id="app">
    <Index/>
  </div>
</template>
<script>
import Index from './pages/Index'
export default {
  name: 'App',
  components: {
   Index
  }
}
</script>
<style>
#app,html,body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 100px;
}
ul,p{
  margin: 0;
  padding: 0;
}
i{
  font-style: normal;
}
</style>
