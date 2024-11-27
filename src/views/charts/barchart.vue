<template>
  <div ref="chart" style="width: 100%; height: 50%; padding: 6px"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";

let chart = ref();
onMounted(() => {
  chartInit();
});

function chartInit() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value);
  // 绘制图表
  myChart.setOption({
    title: {
      text: "巡逻上报记录数量",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    tooltip: {},
    xAxis: {
      type: "value",
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      axisLine: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "category",
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      axisLine: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
        bawWidth: 40,
        itemStyle: {
          color: function (params) {
            let colorList = [
              "#ff7f50",
              "#87cefa",
              "#da70d6",
              "#32cd32",
              "#6495ed",
              "#ff69b4",
            ];
            return colorList[params.dataIndex];
          },
        },
      },
    ],
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
  });
}
</script>

<style scoped></style>
