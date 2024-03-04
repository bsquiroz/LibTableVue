<script setup lang="ts">
import LayoutVue from "./components/Layout.vue";

import Table from "./components/Table/Table.vue";
import { ColumnTable } from "./components/Table/interface";

const columnsTable: ColumnTable[] = [
    {
        field: "check",
        headerName: "Checkout",
        value: "check",
    },
    {
        field: "id",
        headerName: "ID",
        value: "number",
        order: true,
    },
    {
        field: "name",
        headerName: "Name",
        value: "string",
        order: true,
    },
    {
        field: "lastName",
        headerName: "last Name",
        value: "string",
        order: true,
    },
    {
        field: "age",
        headerName: "Age",
        value: "number",
        order: true,
    },
    {
        field: "date",
        headerName: "Date",
        value: "date",
        order: true,
    },
    {
        field: "url",
        headerName: "URL",
        value: "url",
    },
    {
        field: "type",
        headerName: "Type",
        value: "pill",
    },
    {
        field: "status",
        headerName: "Status",
        value: "switch",
    },
    {
        field: "setting",
        headerName: "",
        value: "setting",
    },
];

const rowsTable = [
    {
        check: false,
        id: 9,
        name: "Zara",
        age: 20,
        type: "backend",
        lastName: "perez",
        date: new Date().getTime(),
        url: "https://google.com",
        status: true,
        setting: false,
    },
    {
        check: false,
        id: 1001,
        name: "Brayan",
        age: 23,
        type: "frontend",
        lastName: "Munoz",
        date: new Date().getTime(),
        url: "https://google.com",
        status: false,
        setting: false,
    },
    {
        check: false,
        id: 10,
        name: "Stiven",
        age: 50,
        type: "backend",
        lastName: "Quiroz",
        date: 1580706000000,
        url: "https://google.com",
        status: false,
        setting: false,
    },
    {
        check: false,
        id: 130,
        name: "Mariano",
        age: 20,
        type: "Q&A",
        lastName: "Asis",
        date: new Date().getTime(),
        url: "https://google.com",
        status: true,
        setting: false,
    },
    {
        check: false,
        id: 1111,
        name: "Mariana",
        age: 35,
        type: "fullstack",
        lastName: "Perea",
        date: 1643864400000,
        url: "https://google.com",
        status: true,
        setting: false,
    },
];
</script>

<template>
    <LayoutVue>
        <Table :columns="columnsTable" :rows="rowsTable" />
    </LayoutVue>
</template>

<style scoped></style>
