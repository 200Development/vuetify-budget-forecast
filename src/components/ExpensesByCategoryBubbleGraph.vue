<script setup lang="ts">
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LinearScale
} from 'chart.js'
import { Bubble } from 'vue-chartjs'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

const data = {
  datasets: [
    {
      label: 'Avg Spending by Day',
      backgroundColor: 'RGB(241, 196, 15)',
      data: [
        {
          x: 1,
          y: 1950,
          r: 15
        },
        {
          x: 2,
          y: 0,
          r: 0
        },
        {
          x: 3,
          y: 0,
          r: 0
        },
        {
          x: 4,
          y: 0,
          r: 0
        },
        {
          x: 5,
          y: 3600,
          r: 22
        },
        {
          x: 6,
          y: 0,
          r: 0
        },
        {
          x: 7,
          y: 0,
          r: 0
        },
        {
          x: 8,
          y: 102,
          r: 10
        },
        {
          x: 9,
          y: 43,
          r: 8
        },
        {
          x: 10,
          y: 25,
          r: 5
        },
        {
          x: 11,
          y: 252,
          r: 17
        },
        {
          x: 12,
          y: 10,
          r: 10
        },
        {
          x: 13,
          y: 220,
          r: 17
        },
        {
          x: 14,
          y: 0,
          r: 0
        },
        {
          x: 15,
          y: 0,
          r: 0
        },
        {
          x: 16,
          y: 28,
          r: 4
        },
        {
          x: 17,
          y: 0,
          r: 0
        },
        {
          x: 18,
          y: 1090,
          r: 19
        },
        {
          x: 19,
          y: 220,
          r: 4
        },
        {
          x: 20,
          y: 0,
          r: 0
        },
        {
          x: 21,
          y: 57,
          r: 6
        },
        {
          x: 22,
          y: 109,
          r: 7
        },
        {
          x: 23,
          y: 0,
          r: 0
        },
        {
          x: 24,
          y: 0,
          r: 0
        },
        {
          x: 25,
          y: 104,
          r: 4
        },
        {
          x: 26,
          y: 229,
          r: 9
        },
        {
          x: 27,
          y: 590,
          r: 15
        },
        {
          x: 28,
          y: 804,
          r: 18
        },
        {
          x: 29,
          y: 400,
          r: 14
        },
        {
          x: 30,
          y: 4900,
          r: 15
        },
      ]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      suggestedMax: 8000
    }
  }

}
</script>

<template>
 
    <Bubble :data="data" :options="options" />
  
   
 
</template>
  