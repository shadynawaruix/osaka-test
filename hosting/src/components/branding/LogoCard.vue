<template>
    <div class="flex relative bg-white">
        <div class="relative" :class="[backgroundColors[currentInitiative], stripeClass]">
            <BrandingPattern></BrandingPattern>
            <img v-if="showIcon" class="relative" :src="AdnjLogoImgWhite">
        </div>
        <div class="w-full">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import AdnjLogoImgWhite from "@assets/adnj-logo.svg";
import BrandingPattern from "@components/branding/BrandingPattern.vue";
import {computed} from "vue";

const props = withDefaults(defineProps<{
    initiative: "none" | "discover" | "connect" | "fund" | "unite",
    padding: boolean,
    showLabel: boolean,
    showIcon: boolean,
    stripeClass: string
}>(), {
    showIcon: true,
    stripeClass: "w-24 p-5"
});

const currentInitiative = computed(() => props.initiative || "none");

const backgroundColors = {
    "none": "bg-gray-700",
    "discover": "bg-yellow-700",
    "connect": "bg-sky-700",
    "fund": "bg-green-700",
    "unite": "bg-red-700",
    "background": "bg-gray-100"
};

</script>
