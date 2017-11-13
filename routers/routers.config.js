/**
 * Created by 1 on 2017/11/9.
 */
import overall from "../src/price/overall.vue";
import college from "../src/price/college.vue"
var routers=[
    {
        path:"/",
        redirect:"/overall"

    },
    {
        name:"overall",
        path:"/overall",
        component:overall
    },
    {
        name:"college",
        path:"/college",
        component:college
    },
    {
        name:"major",
        path:"/major",
        component:{
            template:'<h1>专业</h1>'
        }
    }
];
export default routers;