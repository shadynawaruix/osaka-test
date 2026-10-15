<template>
    <div class="text-gray-600">
        <div class="font-semibold text-sm text-gray-900">{{ title }}</div>
        <div v-if="location" class="text-sm text-gray-500">{{ location }}</div>
        <div class="mt-2">
            <slot></slot>
        </div>
        <div v-if="participants?.length" class="grid gap-2 text-xs mt-4" :class="cols">
            <div
                    v-for="participant in participants"
                    class="rounded p-2 bg-slate-100 flex flex-col items-center gap-2"
            >
                <!--
                <div class="w-10 h-10 rounded-full bg-white shadow overflow-hidden border-2 border-white">
                    <img
                            class="w-full h-full"
                            src="https://adnjapan.org/wp-content/uploads/2022/09/Thione-Niang-150x150.jpeg"
                    >
                </div>
                -->
                <div class="text-center text-gray-500">{{ participant }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string,
    location?: string,
    participants: [],
    cols: string,
}>();

</script>
