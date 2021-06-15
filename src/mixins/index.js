var myMixin = {
    created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      },
      test(){
          console.log("test1");
      },
      demo(){
         console.log("demo");
      }
    },
    mounted(){
        console.log("这是混入的mounted")
    }
  }

  export default myMixin