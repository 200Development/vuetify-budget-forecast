<script setup lang="ts">
import BudgetForecastLineGraph from '@/components/BudgetForecastLineGraph.vue';
import MonthlyIncomeExpenseColumnChartVue from '@/components/MonthlyIncomeExpenseColumnChart.vue';
import ExpensesByCategoryBubbleGraph from '@/components/ExpensesByCategoryBubbleGraph.vue';
import ExpensesByCategoryScatterGraph from '@/components/ExpensesByCategoryScatterGraph.vue';
import Accounts from '@/components/Accounts.vue';
import Budget from '@/components/Budget.vue';
</script>

<template>
  <v-row no-gutters>
    <v-col :key="1" cols="12" sm="4">
      <v-card class="pa-2" height="250px" outlined tile>
        <v-container>
          <ExpensesByCategoryBubbleGraph></ExpensesByCategoryBubbleGraph>
        </v-container>
       
        <v-container>
          <v-banner lines="one" text="Average Monthly Spending - $5,896">
          </v-banner>
        </v-container>
      </v-card>
    </v-col>

    <v-col :key="2" cols="12" sm="4">
      <v-card class="pa-2" height="250px" outlined tile>
        <MonthlyIncomeExpenseColumnChartVue></MonthlyIncomeExpenseColumnChartVue>
      </v-card>
    </v-col>

    <v-col :key="3" cols="12" sm="4">
      <v-card class="pa-2" height="250px" outlined tile>
        <ExpensesByCategoryScatterGraph></ExpensesByCategoryScatterGraph>
      </v-card>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <v-col :key="4" cols="12" sm="12">
      <v-card class="pa-2" height="250px">
        <BudgetForecastLineGraph></BudgetForecastLineGraph>
      </v-card>
    </v-col>

  </v-row>

  <v-row no-gutters>
    <v-col :key="5" cols="3" sm="3">
      <v-card class="pa-2" height="300px">
        <Accounts></Accounts>
      </v-card>
    </v-col>

    <v-col :key="6" cols="9" sm="9">
      <v-card class="pa-2" height="300px">
        <Budget></Budget>
      </v-card>
    </v-col>

  </v-row>
  <v-footer>footer</v-footer>

  <!--   <v-row no-gutters>
            <v-col v-for="n in 3" :key="n + 4" cols="12" sm="4">
              <v-card class="pa-2" height="250px" outlined tile>
                One of three columns
              </v-card>
            </v-col>
          </v-row> -->
</template>