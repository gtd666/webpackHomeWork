<template>
 <div class="filter-box">
            <div class="selected-condations clearfix">
                <div class="left-title">已选条件：</div>
                <div class="right-area">
                    <p class="selected-item" v-if="$store.getters.selected_range!='不限'">
                        {{$store.getters.selected_range}}
                        <span class="clear-selected" @click="clearRange">x</span>
                    </p>
                     <p class="selected-item" v-if="$store.getters.selected_area!='不限'">
                        {{$store.getters.selected_area}}
                        <span class="clear-selected" @click="clearArea">x</span>
                    </p>
                </div>
            </div>
            <div class="condations-box">
                <div class="major clearfix">
                   <div class="left-title">专业层次：</div>
                   <div class="right-area"></div>
               </div>
                <school-range :school-range-list="$store.state.school_range_obj"></school-range>
                <school-area :school-area-list="$store.state.school_area_obj"></school-area>
            </div>
             <h4>选考科目分析</h4>
             <p class="con">科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</p>
</div>
</template>
<script>
import school_range from "../component/school_range.vue";
import school_area from "../component/school_area.vue";
export default {
  data() {
    return {
      major_JSON: [],
      school_range_obj: [],
      school_area_obj: []
    };
  },
  created: function() {
    var vm = this;
    this.$http.get("../server/school_range.json").then(function(res) {
      let range_data = res.data.list.map((value, index) => {
        return index == 0
          ? { value: value, selected: true }
          : { value: value, selected: false };
      });
      vm.$store.commit("updated_school_range", range_data);
    });

    this.$http.get("../server/school_area.json").then(function(res) {
      let area_data = res.data.list.map((value, index) => {
        return index == 0
          ? { value: value, selected: true }
          : { value: value, selected: false };
      });
      vm.$store.commit("updated_school_area", area_data);
    });
    this.$http.get("../server/major.json").then(function(res) {
        vm.$store.commit("getMajor", res);
    });
    this.$http.get("../server/overall.json").then(function(res){
          console.log(res)
    })
  },
  methods: {
    clearRange: function() {
      this.$store.commit("clearRange");
    },
    clearArea: function() {
      this.$store.commit("clearArea");
    }
  },
  components: {
    "school-range": school_range,
    "school-area": school_area
  }
};
</script>
<style scoped>
.selected-condations {
  display: flex;
  height: 80px;
  align-items: center;
}
.right-area {
  display: flex;
}
.selected-item {
  margin-right: 15px;
  padding: 4px 6px;
  border: 1px solid #ccc;
  position: relative;
}
.condations-box {
  border: 1px solid #ccc;
  padding: 10px;
}
.condations-box > div {
  margin: 15px 0;
}
.clear-selected {
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: red;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 5px;
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