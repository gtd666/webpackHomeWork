<template>
<div class="route">
   <p class="remind">
        *由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！
    </p>
    <ul class="list">
            <router-link :to="{name:'overall'}" :tag="'li'">综合检索</router-link>
            <router-link :to="{name:'college'}" :tag="'li'">高校检索</router-link>
            <router-link :to="{name:'major'}" :tag="'li'">专业检索</router-link>
    </ul>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    changeClass: function() {
      console.log("changeClass");
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
.remind {
  color: #ff0000;
}
p {
  font-size: 12px;
}
.list {
  border-bottom: 1px solid #ccc;
}
.list li {
  display: inline-block;
  padding: 5px 6px;
  text-align: center;
}
.router-link-active,.list li:hover {
  background: green;
  color: #fff;
}
</style>