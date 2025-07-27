<template>
    <div ref="myChart1" class="base-chart" style="width: 500px; height: 500px; border: 1px solid #ccc; margin: 20px;">
        <!-- <h2>我是BaseChart组件</h2>
        <p>这里可以放置图表内容</p> -->
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
mounted() {
    // 初始化图表
    this.initChart();
  },
  methods: {
    initChart() {
    //   const chartDom = this.$el;
    //  const chartDom = document.querySelector('.base-chart');
    // const myChart = echarts.init(chartDom);
 
      const myChart = echarts.init(this.$refs.myChart1);
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      myChart.setOption(option);
    }
  }

}
</script>

<style>

</style>