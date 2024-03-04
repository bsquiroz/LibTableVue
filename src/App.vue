<script setup lang="ts">
import LayoutVue from "./components/Layout.vue";

import Table from "./components/Table/Table.vue";
import { ColumnTable } from "./components/Table/interface";

const columnsTable: ColumnTable[] = [
    {
        field: "name",
        headerName: "Campaing name",
        value: "string",
        order: true,
    },
    {
        field: "createdBy",
        headerName: "Created by",
        value: "string",
        order: true,
    },
    {
        field: "creationDate",
        headerName: "Creation Date",
        value: "date",
        order: true,
    },
    {
        field: "publishDate",
        headerName: "Publish Date",
        value: "date",
        order: true,
    },
    {
        field: "url",
        headerName: "URL",
        value: "url",
    },
    {
        field: "status",
        headerName: "Status",
        value: "status",
    },
    {
        field: "publish",
        headerName: "Publish",
        value: "publish",
    },
];

const rowsTable = [
    {
        id: 9,
        name: "Campaing zool",
        createdBy: "Andres",
        status: "published",
        creationDate: 1672549200000,
        publishDate: 1672635600000,
        url: "https://google.com",
        publish: true,
    },
    {
        id: 1001,
        name: "Campaing all",
        createdBy: "Zarai",
        status: "published",
        creationDate: 1675227600000,
        publishDate: 1675314000000,
        url: "https://google.com",
        publish: false,
    },
    {
        id: 10,
        name: "Campaing boll",
        createdBy: "Pablo",
        status: "paused",
        creationDate: 1677646800000,
        publishDate: 1677733200000,
        url: "https://google.com",
        publish: false,
    },
    {
        id: 130,
        name: "Campaing dell",
        createdBy: "Daniel",
        status: "disabled",
        creationDate: 1680325200000,
        publishDate: 1680411600000,
        url: "https://google.com",
        publish: true,
    },
    {
        id: 1111,
        name: "Campaing bill",
        createdBy: "Marcos",
        status: "pending",
        creationDate: 1682917200000,
        publishDate: 1683003600000,
        url: "https://google.com",
        publish: true,
    },
];

const config = {
    checks: false,
    settings: false,
};
</script>

<template>
    <LayoutVue>
        <Table :columns="columnsTable" :rows="rowsTable" :config="config" />
    </LayoutVue>
</template>

<style scoped></style>
