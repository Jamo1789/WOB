<template>
<div class="row">

<div class="col-lg-12 col-sm-12">
  <v-chart class="chart" :option="option" />
<!--<p>{{sso[5].labourMonths.slice(0, 4)}}</p>-->
  </div>

</div>

</template>

<script>
//import axios from 'axios'
import PostService from '../PostService'
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent } from 'echarts/components';
import { LineChart } from "echarts/charts";
import {
  TitleComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TitleComponent,

]);

export default {
  name: "LineChart",
  
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "dark"
  },
 
    data() {
    return {
      sso: [],
      option:{
         
        xAxis: {
    data: []
  },
  yAxis: {
    type: "value"
  },
    
  series: [
    {
      data: [],
      type: "line",
      
    }
  ],
  title: {
    text: "Few labour ratez from 2022",
    x: "center",
    textStyle: {
      fontSize: 24
    }
  },
  color: ["#127ac2"]

    }
  }
  
 },
 async created() {
      try{
/*
sso[0].latestmonth.map(i=> Number(i))
        this.sso = await PostService.getPosts();
        this.series[0].data = await PostService.getPosts()["0"].latestmonth;
        this.series[0].data = await PostService.getPosts()
        this.sso.latestmonth.map(i=> Number(i))
*/
        
        this.sso = await PostService.getPosts()
        this.option.xAxis.data.push(...this.sso[5].labourMonths.slice(0, 4).reverse())
        this.option.series[0].data.push(...this.sso[0].latestmonth.map(i=> Number(i))).slice(0, 4)
      }
      
      catch(err){
        this.error.err.message

      }
    }
};
</script>

<style scoped>

.chart {
  margin: auto;
  width: 700px;
  height: 500px;

}

</style>