<template>
   <div class="collage">
       <p class="inp"><input type="text" placeholder="请输入要搜索的高校名称"><button class="btn">检索</button></p>
       <h4>选考科目分析</h4>
       <p class="con">科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</p>
   </div>
</template>

<script>
 export default{
     data:function(){
         return {}
     }
 }   


</script>

<style scoped>
.inp{
    display: flex;
    align-items: center;
}
input{
    border: 4px solid green;
    width: 250px;
    height: 40px;
    padding-left: 10px;
}
.btn{
    width: 120px;
    height: 50px;
    background-color: green;
    color: #fff;
    border: none;
    font-size: 14px
}
h4{
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;
}
.con{
    font-size: 12px;
    color: red
}
</style>

