<template>
    <component :is="type" :href="href" type="button">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
    href?: string
}>();

const type = computed(() =>
{
    if (props.href)
        return "a";
    else
        return "button";
})

</script>
