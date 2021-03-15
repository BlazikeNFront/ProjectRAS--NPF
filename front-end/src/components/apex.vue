<template>
  <apex-charts
    width="500"
    type="area"
    :options="this.options"
    :series="this.series"
  ></apex-charts>
</template>
<script>
import ApexCharts from "vue3-apexcharts";

export default {
  components: {
    ApexCharts,
  },
  props: {
    options: {
      require: true,
    },
    series: {
      require: true,
    },
  },
};
</script>