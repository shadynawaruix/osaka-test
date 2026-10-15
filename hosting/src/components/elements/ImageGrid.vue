<template>
    <div
        class="aspect-square grid grid-cols-2 gap-5 overflow-hidden rounded-lg"
    >
        <img
            v-for="image in images"
            class="w-full h-full object-cover aspect-square"
            :src=image
        >
    </div>
</template>

<script setup lang="ts">
defineProps<{
    images: string[]
}>();
</script>
