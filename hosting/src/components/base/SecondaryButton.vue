<template>
  <BaseButton
      :href="href"
      class="rounded px-4 py-2 font-semibold border border-transparent"
      :class="colors[color]"
  >
      <slot></slot>
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

const colors = {
    "blue": "text-blue-700 hover:bg-blue-50 hover:text-blue-700 disabled:text-gray-500",
}

withDefaults(defineProps<{
    color?: string
    href?: string
}>(), {color: "blue"});
</script>
