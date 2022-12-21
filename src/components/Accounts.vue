<script setup lang="ts">
import Account from '../models/Account';

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
}];
</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="account in accounts" :key="account.id" cols="12">
                <v-card>
                    <span style="height: 20px;">{{ account.name }}
                        <v-chip style="float: right">{{ account.balance}}</v-chip>
                    </span>
                </v-card>
            </v-col>
        </v-row>
        <v-chip class="ma-2" color="primary" variant="outlined" style="position: absolute; bottom: 0">
            User Account
            <v-icon end icon="mdi-account-outline"></v-icon>
        </v-chip>
    </v-container>
</template>