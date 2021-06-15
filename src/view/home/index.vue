<!--  -->
<template>
  <div>
     <p>home</p>
     <div @click="handleMixins" v-demo:[direction]="{ color: 'white', text: 'hello!' }">mixins混入</div>
     <div @click="direction='top'" v-color="'red'">change direction</div>
     <div>
         自定义指令:
         <input placeholder="请输入" v-focus/>
     </div>
  </div>
</template>

<script>
import myMixin  from "../../mixins"
export default {
  data () {
    return {
        direction:'left'
    };
  },
  mixins:[myMixin],
  // 局部定义
  directives:{
      demo:{
        bind(){
          console.log("bind");
        },
        inserted: function (el,binding) {
            console.log("inserted");
            console.log("11:",el,binding)
        },
        update(){
            console.log("update"); 
        },
        componentUpdated(){
            console.log("componentUpdated");  
        },
        unbind(){
             console.log("unbind");  
        }
      }
  },
  components: {},
  created(){
    console.log("这是组件的created")
  },
  computed: {},

  mounted() {
      console.log("这是组件的mounted:",this.NOTICE,this)
      this.myGlobalMethod();
  },

  methods: {
    test(){
       console.log("test2");
    },
    handleMixins(){
        console.log("混入测试:",this);
        this.test();
        this.demo();
    }
  }
}

</script>
<style scoped>
</style>