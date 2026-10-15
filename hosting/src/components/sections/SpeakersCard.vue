<template>
    <div class="flex flex-col">
        <div class="w-full bg-slate-50 aspect-square relative overflow-hidden">
            <img class="absolute inset-0 object-cover" :src="image">
        </div>
        <div class="bg-white rounded p-5 flex flex-col grow">
            <div>
                <div class="text-red-800">{{ label }}</div>
                <div class="font-semibold">
                    <slot name="name"></slot>
                </div>
                <div class="text-slate-500 text-sm italic mt-2">
                    <slot name="info"></slot>
                </div>
            </div>
            <!--
            <div v-if="$slots.topic" class="text-slate-500 text-sm mt-5 p-2 bg-slate-50 grow">
                <div class="font-bold mb-0.5">Topic</div>
                <slot name="topic"></slot>
            </div>
            -->
        </div>
    </div>
</template>

<script setup lang="ts">

import {getLangFromUrl, useTranslations} from "@i18n/utils";
import {defaultLang} from "@i18n/ui";
import {SpeakerRoles} from "@i18n/speakers";
import {computed} from "vue";

const props = withDefaults(defineProps<{
    lang: string,
    role: SpeakerRoles,
    image: string
}>(), {
    lang: defaultLang
});

const t = useTranslations(props.lang);

const label = computed(() =>
{
    switch (props.role)
    {
        case SpeakerRoles.speaker:
            return t("label.speaker")
        case SpeakerRoles.moderator:
            return t("label.moderator")
        case SpeakerRoles.mc:
            return t("label.mc")
    }
})

</script>
