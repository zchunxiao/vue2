export default {
    install:function(Vue){
        console.log("plugin")
        Vue.prototype.myGlobalMethod =()=>{
            console.log("myGlobalMethod")
        }
        Vue.prototype.NOTICE = true;
        
        Vue.directive('color',(el,binding)=>{
            el.style.color=binding.value;
        })
    }
}