<template>
  <span class="filter-item" @click="toggle" :class="{selected:rangeObject.selected}">{{rangeObject.value}}</span>
</template>

<script>
export default {
  props: {
    rangeObject: {
      required: true,
      type: Object
    },
    index: {
      required: true
    },
    catagory: {
      required: true,
      type: String
    }
  },
  methods: {
    toggle: function() {
      if (this.catagory == "高校层次") {
        this.$store.commit("reset_school_range", {
          index: this.index,
          selected: !this.rangeObject.selected
        });
        return;
      }
      if (this.catagory == "高校地区") {
        this.$store.commit("reset_area_range", {
          index: this.index,
          selected: !this.rangeObject.selected
        });
      }
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: green;
  color: #fff;
}
.filter-item{
  margin-right: 5px
}
</style>

