<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const data = {
  labels: [
    'Subscriptions',
    'Rent',
    'Utilities',
    'Gas',
    'Insurance',
    'Discretionary',
    'Food',
    'Kids'
  ],
  datasets: [
    {
      label: 'Monthly Expenses',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40, 70]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <Radar :data="data" :options="options" />
</template>

  