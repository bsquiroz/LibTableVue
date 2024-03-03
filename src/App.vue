<script setup lang="ts">
import LayoutVue from "./components/Layout.vue";

import Table from "./components/Table/Table.vue";
import { ColumnTable } from "./interface";

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
    },
    {
        field: "name",
        headerName: "Name",
        value: "string",
    },
    {
        field: "lastName",
        headerName: "last Name",
        value: "string",
    },
    {
        field: "age",
        headerName: "Age",
        value: "number",
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
    },
    {
        id: 10,
        name: "Stiven",
        age: 50,
        type: "backend",
        lastName: "Quiroz",
    },
    {
        id: 130,
        name: "Mariano",
        age: 20,
        type: "Q&A",
        lastName: "Asis",
    },
    {
        id: 111,
        name: "Mariana",
        age: 35,
        type: "fullstack",
        lastName: "Perea",
    },
];
</script>

<template>
    <LayoutVue>
        <h2>Custom table</h2>
        <Table :columns="columnsTable" :rows="rowsTable" />
    </LayoutVue>
</template>

<style scoped></style>
