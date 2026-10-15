<template>
    <div class="px-5 py-10 md:p-10 w-full relative grid grid-cols-5 gap-10">
        <div>
            <div class="font-bold text-lg">{{ time }}</div>
        </div>
        <div class="col-span-4">
            <div class="font-bold text-lg">{{ title }}</div>
            <div class="text-gray-500 text-sm">{{ location }}</div>
            <div class="mt-2 text-gray-600 mb-2">{{ description }}</div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    time: string,
    title: string,
    location: string,
    description: string,
}>();

</script>
