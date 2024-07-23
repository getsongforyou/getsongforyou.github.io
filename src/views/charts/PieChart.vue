<template>
  <div id="container" style="width: 900px;height: 900px;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'QingMengPieChart',

  data() {
    return {
      
    };
  },

  mounted() {
    this.inits()
  },

  methods: {
    inits(){
        let chart = echarts.init(document.getElementById('container'))
        const option={
            title: {text:'duel-master'},
            series: [
                {
                    type: 'pie',
                    data: [
                        {
                            name: '于贝尔',
                            value: 49
                        },
                        {
                            name: '阎王',
                            value:30
                        },{
                            name: '百夫长',
                            value: 13
                        },
                        {
                            name: '珠泪',
                            value: 8
                        },
                        {
                            name: '白银',
                            value: 2
                        }
                    ]
                }
            ]
        }
        chart.setOption(option)
    }
  },
};
</script>