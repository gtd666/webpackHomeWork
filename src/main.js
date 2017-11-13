/**
 * Created by 1 on 2017/11/9.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
Vue.use(VueRouter);
import routers from "../routers/routers.config.js";
import app from "./app.vue";
import Vuex from "vuex";
Vue.use(Vuex);
var store=new Vuex.Store({
    state:{
        school_range_obj:[],
        school_area_obj:[]

    },
    mutations:{
        updated_school_range:function(state,list){
              state.school_range_obj=list;
        },
        updated_school_area:function(state,list){
              state.school_area_obj=list;
        },
        reset_school_range:function(state,item){
            let arr;
            arr=state.school_range_obj.map((value,index)=>{
                value.selected=false;
                if(item.index==index){
                    value.selected=item.selected
                }
                return value;
            });
            let selected_none=true;
            arr.forEach((item)=>{
                if(item.selected){
                    selected_none=false;
                }

            })
            if(selected_none){
                arr[0].selected=true;
            }
            state.school_range_obj=arr;

        },
        reset_area_range:function(state,item){
            state.school_area_obj[0].selected=false;
            if(item.index==0){
                state.school_area_obj.map((value,index)=>{
                    value.selected=(index==0);
                    return value;
                })
                return;
            }
            let arr;
            arr=state.school_area_obj.map((value,index)=>{
                if(item.index==index){
                    value.selected=item.selected
                }
                return value;
            });
            let selected_none=true;
            arr.forEach((item)=>{
                if(item.selected){
                    selected_none=false;
                }

            })
            if(selected_none){
                arr[0].selected=true;
            }

        },
        getMajor:function(state,item){
            //console.log(item)

        },
        clearRange:function(state){
             state.school_range_obj.forEach((value,index)=>{
                 value.selected=(index==0)
             })
        },
        clearArea:function(state){
            state.school_area_obj.forEach((value,index)=>{
                value.selected=(index==0)
            })
       }
    },
    getters:{
        selected_range:function(state){
            let str="";
            state.school_range_obj.forEach((value,index)=>{
                 if(value.selected){
                     str+=value.value;
                 }
            })
            return str;
        },
        selected_area:function(state){
            let arr=[];
            state.school_area_obj.forEach((value,index)=>{
                 if(value.selected){
                     arr.push(value.value);
                 }
            })
            return arr.join(",");
        }
    }
});
var router=new VueRouter({
     routes:routers
});

/*var abc={
    install:function(vue){
        console.log(vue);
        //添加全局方法或属性
        vue.test=function(){
            console.log("test")
        };
        //添加实例方法或属性
        vue.prototype.$http=function(){
            console.log("在这里请求数据")
        }
    }
};*/
//通过全局use函数注册插件
//Vue.use(abc);
let $http={
    install:function(vue){
      vue.prototype.$http=axios;
    }
}
Vue.use($http);
new Vue({
     el:".container",
     router:router,
     render:function(createElement){
         return createElement(app);
     },
     store:store,
     mounted:function(){
       /* console.log(this)
        Vue.test();
        this.$http();*/
    }
});
if(module.hot){
    module.hot.accept();
}