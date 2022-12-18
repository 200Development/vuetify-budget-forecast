<script setup lang="ts">
import MonthlyIncomeExpenseColumnChartVue from '../components/MonthlyIncomeExpenseColumnChart.vue';
</script>

<template>
     <v-row no-gutters>
            <v-col :key="1" cols="12" sm="4">
              <v-card class="pa-2" height="250px" outlined tile>
                One of three columns
              </v-card>
            </v-col>
         
            <v-col :key="2" cols="12" sm="4">
              <v-card class="pa-2" height="250px" outlined tile>
                <MonthlyIncomeExpenseColumnChartVue></MonthlyIncomeExpenseColumnChartVue>
              </v-card>
            </v-col>
       
            <v-col :key="3" cols="12" sm="4">
              <v-card class="pa-2" height="250px" outlined tile>
                One of three columns
              </v-card>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col :key="4" cols="12" sm="12">
              <v-card class="pa-2" height="250px">
                
              </v-card>
            </v-col>

          </v-row>

          <v-row no-gutters>
            <v-col :key="5" cols="12" sm="12">
              <v-card class="pa-2" height="250px">
                
              </v-card>
            </v-col>

          </v-row>

        <!--   <v-row no-gutters>
            <v-col v-for="n in 3" :key="n + 4" cols="12" sm="4">
              <v-card class="pa-2" height="250px" outlined tile>
                One of three columns
              </v-card>
            </v-col>
          </v-row> -->
</template>