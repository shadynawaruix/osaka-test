<template>
    <div class="flex flex-col items-center gap-2  group overflow-visible" :class="size">
        <div
                class="p-1 h-min relative transition-all ease-linear"
                :class="[backgroundColors[currentInitiative], padding ? 'pt-10' : 'pt-1', size]"
        >
            <BrandingPattern v-if="showPattern"></BrandingPattern>
            <img class="relative" :src="AdnjLogoImgWhite">
        </div>
        <transition
                enter-active-class="transition"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
        >
            <div v-if="showLabel" class="flex gap-1 group-hover:underline pb-2">
                <div class="text-xs text-gray-900" :class="labels[currentInitiative] ? '' : 'font-bold'">ADNJ</div>
                <div v-if="labels[currentInitiative]" class="font-bold text-xs" :class="labelColors[currentInitiative]">
                    {{ labels[currentInitiative] }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">

import AdnjLogoImgWhite from "@assets/adnj-logo.svg";
import BrandingPattern from "@components/branding/BrandingPattern.vue";
import {computed} from "vue";

const props = withDefaults(
    defineProps<{
        initiative: "none" | "discover" | "connect" | "fund" | "unite",
        padding: boolean,
        showLabel: boolean,
        showPattern: boolean,
        size: string,
    }>(),
    {
        showPattern: true,
        size: "w-14"
    });

const currentInitiative = computed(() => props.initiative || "none");

const labels = {
    "none": "",
    "discover": "Discover",
    "connect": "Connect",
    "fund": "Fund",
    "unite": "Unite"
};

const labelColors = {
    "none": "",
    "discover": "text-yellow-700",
    "connect": "text-sky-700",
    "fund": "text-green-700",
    "unite": "text-red-700"
};

const backgroundColors = {
    "none": "bg-gray-700 group-hover:bg-gray-800",
    "discover": "bg-yellow-700 group-hover:bg-yellow-800",
    "connect": "bg-sky-700 group-hover:bg-sky-800",
    "fund": "bg-green-700 group-hover:bg-green-800",
    "unite": "bg-red-800/90 group-hover:bg-red-800"
};

</script>
