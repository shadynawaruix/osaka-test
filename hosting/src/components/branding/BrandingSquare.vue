<template>
    <div>
        <div class="bg-white aspect-square flex  rounded shadow overflow-hidden" v-bind="$attrs">
            <slot></slot>
        </div>
        <div class="text-sm text-gray-500 p-2">{{ label }}</div>
    </div>
</template>

<script lang="ts">
// use normal <script> to declare options
export default {
    inheritAttrs: false
};
</script>

<script setup lang="ts">
defineProps<{
    label: string
}>();
</script>
