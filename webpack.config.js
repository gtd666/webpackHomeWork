/**
 * Created by 1 on 2017/11/9.
 */
var webpack=require("webpack");
module.exports={
    entry:{
         bundle:"./src/main.js"
    },
    output:{
         path:__dirname+"/dist",
         filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:[/\.vue$/],
                use:['vue-loader']

            },
            {
                test:[/\.css$/],
                use:['style-loader','css-loader']

            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        open:true,
        port:8090,
        compress:true,
        hot:true,
        inline:true
    },
    devtool:"cheap-eval-source-map",
    resolve:{
        alias:{//设置别名
            "vue":"vue/dist/vue.js"
        }
    }


};