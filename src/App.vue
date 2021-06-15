<template>
  <div id="app">
      <dv-border-box-1>
        <img alt="Vue logo" src="./assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>

          <div class="box">
              <dv-charts :option="option" />
          </div>
          <router-view></router-view>   
         
      </dv-border-box-1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,

  },
  data(){
    return {
      option:{
         title: {
          text: '剩余油量表',
          style: {
            fill: '#fff'
          }
        },
          series: [
            {
              type: 'gauge',
              data: [ { name: 'itemA', value: 55 } ],
              center: ['50%', '55%'],
              axisLabel: {
                formatter: '{value}%',
                style: {
                  fill: '#fff'
                }
              },
              axisTick: {
                style: {
                  stroke: '#fff'
                }
              },
              animationCurve: 'easeInOutBack'
            }
          ]
      }
    }
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
  margin-top: 60px;
}
.box{
  width:94%;
  height: 300px;
  background:#ccc;
  margin:3%;
}
</style>
