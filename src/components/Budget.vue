<script setup lang="ts">
import Budget from '@/models/Budget';

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
    id: 1,
    name: 'Discretionary',
    allocation: 250,
    balance: 0
}, {
    id: 2,
    name: 'Kids',
    allocation: 150,
    balance: 0
}, {
    id: 3,
    name: 'Gas',
    allocation: 55,
    balance: 9
}, {
    id: 2,
    name: 'Utilities',
    allocation: 150,
    balance: 0
}, {
    id: 3,
    name: 'Debt',
    allocation: 55,
    balance: 9
}];
</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="budget in budgets" :key="budget.id" cols="4">
                <v-card width="50%">
                    <span style="height: 20px; width: 50%">{{ budget.name }}: {{ budget.allocation }}</span>
                    <v-divider></v-divider>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>