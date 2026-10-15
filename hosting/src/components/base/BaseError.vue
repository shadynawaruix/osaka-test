<template>
<div class="p-4">
    <div class="px-2 py-1 rounded bg-gray-50 border-l-4 border-red-500 text-red-700 flex items-center gap-2">
        <ExclamationCircleIcon class="w-[1em] h-[1em]"></ExclamationCircleIcon>
        <slot></slot>
    </div>
</div>
</template>

<script setup lang="ts">
import { ExclamationCircleIcon } from "@heroicons/vue/24/outline";
</script>
