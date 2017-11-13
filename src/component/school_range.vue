<template>
   <div class="school-range clearfix">
        <div class="left-title">高校层次：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolRangeList" :key="index" :index="index" :range-object="value" :catagory="'高校层次'"></filter-item>
        </div>
    </div>
</template>
<script>
import filter_item from "./filter.vue";
export default {
  data: function() {
    return {
      sreset: false
    };
  },
  props: {
    schoolRangeList: {
      required: true,
      type: Array
    }
  },
  components: {
    "filter-item": filter_item
  }
};
</script>
<style scoped>
.school-range{
    display: flex;
    align-items: center
}
.filter-item{
    display: inline-block;
    padding: 5px 8px;
}
.filter-item:hover{
    background-color: green;
    color:#fff
}
</style>
