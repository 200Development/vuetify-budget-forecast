<script setup lang="ts">
import { Budget } from '@/models/Budget';
import VueSlider from 'vue-3-slider-component'
import { onMounted, ref } from 'vue';

var budgets: Budget[] = [{
    id: 1,
    name: 'Subscriptions',
    allocation: 250,
    balance: 500
}, {
    id: 2,
    name: 'Rent/Mortgage',
    allocation: 1000,
    balance: 1000
}, {
    id: 3,
    name: 'Food',
    allocation: 55,
    balance: 9
}, {
    id: 4,
    name: 'Discretionary',
    allocation: 250,
    balance: 0
}, {
    id: 5,
    name: 'Kids',
    allocation: 150,
    balance: 0
}, {
    id: 6,
    name: 'Gas',
    allocation: 55,
    balance: 9
}, {
    id: 7,
    name: 'Utilities',
    allocation: 150,
    balance: 0
}, {
    id: 8,
    name: 'Debt',
    allocation: 55,
    balance: 9
}];

let availableFunds = ref<number>(3500);
const value3: any = ref<any>();
const data = [
    0, 300, 3500
];
const budgetTracking = new Map();

onMounted(() => {
    budgets.forEach(budget => {
        budgetTracking.set(`${budget.id}`, `${budget.allocation}`);
    });
});

function getBudgetMaxAllocation(budget: Budget) {
    return availableFunds.value + budget.allocation;
};

function allocationUpdated(budget: Budget) {
    const originalAllocation = budgetTracking.get(`${budget.id}`);
    if (availableFunds.value - (originalAllocation - budget.allocation) < 0) {
        return;
    };
    availableFunds.value += (originalAllocation - budget.allocation);
    budgetTracking.set(`${budget.id}`, `${budget.allocation}`);
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" style="text-align: center">
                <div>
                    <span>Available Funds - </span>
                    <v-chip>{{ availableFunds }}</v-chip>
                </div>
            </v-col>
            <v-divider></v-divider>
            <v-col v-for="budget in budgets" :key="budget.id" cols="4">
                <v-card class="pa-3 justify-center" width="75%" height="60px" elevation="2">
                    <span style="height: 20px; width: 50%">{{ budget.name }}
                        <v-chip style="float: right">{{ budget.allocation }}</v-chip>
                    </span>
                    <span>
                        <VueSlider v-model="budget.allocation" @change="allocationUpdated(budget)" tooltip="never"
                            tooltipPlacement="right" width="50%" :min="0" :max="getBudgetMaxAllocation(budget)"
                            :interval="1.00" :marks="data" />
                    </span>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

