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
        value: "string",
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
        order: true,
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
        field: "edit",
        headerName: "Edit",
        value: "edit",
    },
    {
        field: "setting",
        headerName: "",
        value: "setting",
    },
];

const rowsTable = [
    {
        id: 1001,
        name: "Brayan",
        age: 23,
        type: "frontend",
        lastName: "Munoz",
        date: new Date(),
        url: "https://google.com",
    },
    {
        id: 10,
        name: "Stiven",
        age: 50,
        type: "backend",
        lastName: "Quiroz",
        date: new Date(),
        url: "https://google.com",
    },
    {
        id: 130,
        name: "Mariano",
        age: 20,
        type: "Q&A",
        lastName: "Asis",
        date: new Date(),
        url: "https://google.com",
    },
    {
        id: 111,
        name: "Mariana",
        age: 35,
        type: "fullstack",
        lastName: "Perea",
        date: new Date(),
        url: "https://google.com",
    },
];
</script>

<template>
    <LayoutVue>
        <Table :columns="columnsTable" :rows="rowsTable" />
    </LayoutVue>
</template>

<style scoped></style>
