<template>
    <Container class="relative bg-white w-full flex flex-col items-center">
        <h2 class="text-4xl font-semibold mb-10 text-center">Program</h2>

        <div class="z-10 w-full max-w-screen-lg mx-auto grid grid-cols-2 px-1 sticky top-[4.2rem] md:top-[3.75rem] bg-white border-b border-slate-300">
            <button
                    class="border-b-4 text-center py-4 hover:bg-slate-50 active:bg-slate-100"
                    :class="activeTab == 0 ? 'border-red-700 text-red-800 font-semibold' : 'border-transparent text-gray-500'"
                    @click="onSelectTab(0)"
            >
                {{ t("program.day1") }}
            </button>
            <button
                    class="border-b-4 text-center py-4 hover:bg-slate-50 active:bg-slate-100"
                    :class="activeTab == 1 ? 'border-red-700 text-red-800 font-semibold' : 'border-transparent text-gray-500'"
                    @click="onSelectTab(1)"
            >
                {{ t("program.day2") }}
            </button>
        </div>
        <div ref="anchor"></div>
        <div v-if="activeTab == 0" class="max-w-screen-lg mx-auto w-full  relative">
            <slot name="forum"></slot>
        </div>
        <div v-if="activeTab == 1" class="max-w-screen-lg mx-auto w-full  relative">
            <slot name="expo"></slot>
        </div>
    </Container>
</template>

<script setup lang="ts">
import {ref} from "vue";
import TimetableEntry from "@components/sections/TimetableEntry.vue";
import TimetableEntrySection from "@components/sections/TimetableEntrySection.vue";
import {useWindowScroll} from "@vueuse/core";
import {defaultLang} from "@i18n/ui";
import {useTranslations} from "@i18n/utils";
import Container from "@components/layout/Container.vue";

const props = withDefaults(defineProps<{
    lang: string
}>(), {
    lang: defaultLang
});

const t = useTranslations(props.lang);

const activeTab = ref(0);
const anchor = ref<HTMLElement>();

function onSelectTab(index: number)
{
    activeTab.value = index;
    scrollToAnchor();
}

function scrollToAnchor()
{
    const headerOffset = 120;
    const elementPosition = anchor.value.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

</script>
