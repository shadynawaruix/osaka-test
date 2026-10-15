<template>
    <Container :separator="separator">
        <h2 class="text-3xl font-semibold">
            <slot name="title"></slot>
        </h2>
        <div class="w-10 h-0.5 bg-[#d19e2b] my-10 relative"></div>
        <div class="grid gap-5" :class="classes[cols] || 'md:grid-cols-3'">
            <slot></slot>
        </div>
    </Container>
</template>

<script setup lang="ts">
import Container from "@components/layout/Container.vue";

const classes = [
    "",
    "grid-cols-1 md:grid-cols-1",
    "grid-cols-2 md:grid-cols-2",
    "grid-cols-2 md:grid-cols-3",
    "grid-cols-2 md:grid-cols-4",
    "grid-cols-2 md:grid-cols-5",
    "grid-cols-2 md:grid-cols-6",
    "grid-cols-2 md:grid-cols-7"
]

defineProps<{
    cols: number,
    separator: boolean,
}>();
</script>
