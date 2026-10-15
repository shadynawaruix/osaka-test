<template>
    <BaseButton
        :href="href"
        class="rounded text-center px-4 py-2 font-semibold border border-transparent"
        :class="colors[color]"
    >
        <slot></slot>
    </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

const colors = {
    "green-text": "text-green-700 hover:text-green-700 hover:bg-gray-200",
    "green": "bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:text-gray-100",
    "orange-text": "text-amber-600 hover:text-amber-700 hover:bg-gray-200",
    "orange": "bg-amber-600 text-white hover:bg-amber-700 disabled:bg-gray-400 disabled:text-gray-100",
    "yellow": "bg-[#d19e2b] text-white hover:bg-yellow-700 disabled:bg-gray-400 disabled:text-gray-100",
    "yellow-text": "text-yellow-700 hover:bg-slate-100 hover:text-yellow-700",
    "blue-text": "text-sky-700 hover:text-sky-800 hover:bg-gray-200",
    "blue": "bg-sky-700 text-white hover:bg-sky-800 disabled:bg-gray-400 disabled:text-gray-100",
    "red": "bg-red-600 text-red-50 hover:bg-red-700 disabled:bg-gray-400 disabled:text-gray-100",
    "red-text": "text-red-700 hover:bg-slate-100 hover:text-red-700",
    "black": "bg-slate-700 text-gray-50 hover:bg-slate-800 disabled:bg-gray-400 disabled:text-gray-100",
    "black-text": "text-gray-700 hover:text-gray-700 hover:bg-slate-200"
};

withDefaults(defineProps<{
    color?: string
    href?: string
}>(), { color: "black" });
</script>
