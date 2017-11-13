<template>
    <div class="school-area clearfix">
        <div class="left-title">高校地区：</div>
        <div class="right-area">
              <filter-item v-for="(value,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :range-object="value"></filter-item>
        </div>
    </div>
</template>
<script>
import filter_item from "./filter.vue";
export default {
  props: {
    schoolAreaList: {
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
.school-area{
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
