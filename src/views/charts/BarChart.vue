<template>
  <div id="main">

  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'QingMengBarChart',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    inits(){
        let chart = echarts.init(document.getElementById('main'))
        const option = {
            title: {
                text: 'bar'
            },
            xAxis: {
                type: 'category',
                data: ['G1','G2','G3','G4','G5']
            },
            yAxis: {
                type: 'value',

            },
            series: [
                {
                    type: 'bar',
                    name: 'women',
                    data: [20,34,30,35,27]
                },
                {
                    type: 'bar',
                    name: 'man',
                    data: [25,32,34,20,25]
                }
            ]
        }
        chart.setOption(option)
    }
  },
};
</script>