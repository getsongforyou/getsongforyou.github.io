<template>
  <div id="main" style="width: 1200px;height: 900px;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'QingMengLineChart',

  data() {
    return {
      
    };
  },

  mounted() {
    this.inits()
  },

  methods: {
    inits(){
        let chart = echarts.init(document.getElementById('main'))
        const option = {
            tooltip:{
                show:true,
                trigger: 'axis'
            },
            title: {
                text: 'line'
            },
            legend: {
                show: true,
            },
            xAxis: {
              type: 'time',
              data: [2015,2016,2017,2018,2019]  
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    type: 'line',
                    name: 'yin',
                    data: [
                        ['2015',2589],
                        ['2016',3890],
                        ['2017',9043],
                        ['2018',490],
                        ['2019',3902],
                    ]
                },
                {
                    type: 'line',
                    name: 'yang',
                    data: [
                        ['2015',903],
                        ['2016',2093],
                        ['2017',8302],
                        ['2018',893],
                        ['2019',6893],
                    ]
                }
            ]
        }
        chart.setOption(option)
    }
  },
};
</script>