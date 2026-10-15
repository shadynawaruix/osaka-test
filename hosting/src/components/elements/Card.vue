<template>
    <div class="grid grid-cols-2 group cursor-pointer hover:shadow-lg bg-white">
        <div class="aspect-square pl-10 pt-5 pb-7 pr-5 gap-2 flex flex-col justify-between">
            <div>
                <p class="text-red-700/70 text-sm mb-1">Event</p>
                <p class="font-bold mb-2 group-hover:text-green-800" :class="titleClass">
                    <slot name="title">{{ title }}</slot>
                </p>
                <p class="leading-6 text-gray-600 text-sm line-clamp-6">
                    <slot name="content">{{ content }}</slot>
                </p>
            </div>
            <a v-if="link" :href="link" class="text-green-700 text-sm group-hover:underline">
                <slot name="link">{{ linkLabel }}</slot>
            </a>
        </div>
        <div v-if="image || $slots.image" class="aspect-square gap-5 p-5 overflow-hidden">
            <slot name="image">
                <img class="w-full h-full object-cover rounded-lg" :src="image">
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    titleClass: string,
    content: string,
    link: string,
    linkLabel: string,
    image: string,
}>();
</script>
