<script setup lang="ts">import { Account } from '@/models/Account';
import { ref } from 'vue';

const elevation = ref(3);
var accounts: Account[] = [{
    id: 1,
    name: 'Wecu Checking',
    balance: 250
}, {
    id: 2,
    name: 'Global Credit Union Checking Account',
    balance: 150
}, {
    id: 3,
    name: 'Marcus Savings',
    balance: 9317
}]
</script>

<template>
    <div class="text-center">
        <v-row>
            <v-col v-for="account in accounts" :key="account.id" cols="12">
                <v-card><span style="float: left; height: 20%;">{{account.name}} - {{account.balance}}</span></v-card>
            </v-col>
        </v-row>
        <v-chip class="ma-2" color="primary" variant="outlined">
            User Account
            <v-icon end icon="mdi-account-outline"></v-icon>
        </v-chip>
    </div>
</template>