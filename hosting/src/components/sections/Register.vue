<template>
    <Container class="bg-red-800/90">
        <div class=" max-w-screen-xl mx-auto px-5 py-20">
            <div class="bg-white/20 w-full flex flex-col md:items-center justify-center py-20 relative px-10">
                <div class="absolute left-5 md:left-14 top-0 right-0 bottom-0 bg-white"></div>
                <h2 class="text-4xl font-semibold relative">
                    <slot name="title"></slot>
                </h2>
                <div class="md:hidden w-10 h-0.5 bg-[#d19e2b] my-10 relative"></div>
                <div class="flex flex-col md:flex-row gap-1 md:gap-4 relative md:mt-10">
                    <div class="">{{ t("info.date") }}</div>
                    <div class="w-[1px] border-r border-[#d19e2b] hidden md:block"></div>
                    <div class="">{{ t("info.time") }}</div>
                    <div class="w-[1px] border-r border-[#d19e2b]  hidden md:block"></div>
                    <div class="">{{ t("info.location") }}</div>
                </div>

                <div class="mt-10 relative w-full md:w-auto">
                    <PrimaryButton href="/register" class="w-full md:w-auto">{{ t("hero.register") }}</PrimaryButton>
                </div>
            </div>
        </div>

    </Container>
</template>

<script setup lang="ts">
import PrimaryButton from "../base/PrimaryButton.vue";
import {defaultLang} from "@i18n/ui";
import {useTranslations} from "@i18n/utils";
import Container from "@components/layout/Container.vue";

const props = withDefaults(defineProps<{
    lang: string
}>(), {
    lang: defaultLang
});

const t = useTranslations(props.lang);

</script>
