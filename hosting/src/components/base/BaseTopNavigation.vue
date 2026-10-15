<template>
    <div class="sticky top-0 overflow-visible h-0 z-40 pointer-events-none">
        <div class="transition-all" :key="key" ref="container" :class="showFullHeader ? '' : 'bg-white'">
            <div
                    class="flex pointer-events-auto justify-between max-w-screen-xl mx-auto w-full px-2 md:px-5 transition-all ease-linear"
            >
                <div
                        class="md:w-48 flex justify-start h-min gap-2 text-sm transition-all ease-linear"
                        :class="showFullHeader ? initialClass : scrolledClass"
                >
                    <slot name="left"></slot>
                </div>
                <div
                        class="lg:flex justify-center items-end gap-2 text-sm transition-all ease-linear relative hidden"
                        :class="showFullHeader ? initialClass : scrolledClass"
                >
                    <slot name="center"></slot>
                </div>
                <div
                        class="md:w-48 flex justify-end items-end gap-2 text-sm transition-all ease-linear"
                        :class="showFullHeader ? initialClass : scrolledClass"
                >
                    <slot name="right"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {LanguageIcon, ChevronDownIcon} from "@heroicons/vue/24/outline";
import PrimaryButton from "@components/base/PrimaryButton.vue";
import LogoBanner from "@components/branding/LogoBanner.vue";
import {useElementBounding, useWindowScroll} from "@vueuse/core";
import {computed, onBeforeMount, onMounted, ref, watch} from "vue";

import {Bars3Icon} from "@heroicons/vue/24/outline";
import BaseDropdown from "@components/base/BaseDropdown.vue";

const props = defineProps<{
    initiative: "none" | "discover" | "connect" | "fund" | "unite",
    currentPage: "mission" | "about" | "events" | "unite" | "discover" | "connect" | "fund",
    language: string,
    initialClass: string,
    scrolledClass: string,
    items: [],
}>();

const {x, y} = useWindowScroll();

const container = ref<HTMLElement>();
const showFullHeader = computed(() => y.value <= 20);
const key = ref<number>(0);

onMounted(() =>
{
    key.value++;
});
</script>
