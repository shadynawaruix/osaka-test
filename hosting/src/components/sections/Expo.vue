<template>
  <!-- Day 2 -->
    <Container>
        <div class="col-span-full grid grid-cols-1 md:grid-cols-3 space-y-10 md:gap-10">
            <div class="p-5 h-full col-span-2 bg-black relative py-20">
                <div class="absolute left-1/2 top-0 right-0 bottom-0 overflow-hidden">
                    <img class="w-full h-full object-cover -scale-x-100" :src="ExpoImg">
                </div>
                <div class="relative md:pt-10 md:pl-10">
                    <p class="text-amber-300 text-lg mb-2">Day 2</p>
                    <h2 class="text-3xl font-semibold text-white max-w-[70%]">
                        <slot name="title"></slot>
                    </h2>
                    <div class="flex gap-4 text-slate-200 mt-2">
                        <div>{{ t("info.expo.date") }}</div>
                        <div class="w-[1px] border-r border-amber-300"></div>
                        <div>{{ t("info.expo.time") }}</div>
                    </div>
                    <div class="w-10 h-0.5 bg-yellow-500 my-5"></div>
                    <div class="text-white max-w-[200px] text-sm leading-6 mb-2 font-bold">
                        <slot name="subtitle"></slot>
                    </div>
                    <div class="text-slate-200 max-w-[200px] text-sm leading-6">
                        <slot name="description"></slot>
                    </div>
                </div>
            </div>

            <div class="md:col-span-1 md:order-first">
                <img src="https://adnjapan.org/wp-content/uploads/2023/07/VENUE2.jpeg">
                <div>
                    <div class="py-3 pt-5 flex flex-col gap-0">
                        <div class="px-5 text-slate-500 text-sm">Venue</div>
                        <p class="px-5 font-bold text-slate-900">
                            <slot name="venue-name"></slot>
                        </p>
                    </div>
                    <div class="py-3 border-t border-white flex flex-col gap-5">
                        <div class="flex items-center gap-5 px-5 text-sm text-slate-600">
                            <MapPinIcon class="w-[1em] h-[1em] shrink-0"></MapPinIcon>
                            <div>
                                <slot name="venue-address"></slot>
                            </div>
                        </div>
                    </div>
                    <a
                       href="https://goo.gl/maps/APvH4tWo9ffJpKYB6"
                       target="_blank"
                       class="border-t border-white px-5 py-3 text-sm text-slate-500 hover:text-slate-900 underline underline-offset-4"
                    >
                        Show on map
                    </a>
                </div>
            </div>
            <div class="col-span-full grid md:grid-cols-3 gap-10 leading-7 text-gray-900">

                <div class=" p-5">
                    <p class="p-5 text-red-800/70 uppercase text-sm font-semibold">Day 2 - Business Area</p>
                    <ul class="grid grid-cols-1 gap-10">
                        <li v-for="item in 2" class="bg-white p-5">
                            <h3 class="font-bold text-gray-900 mb-2">
                                <slot :name="`business-card-${item}-title`"></slot>
                            </h3>
                            <div class="w-10 h-0.5 bg-red-500 my-3"></div>
                            <p class="text-gray-600 leading-7">
                                <slot :name="`business-card-${item}-content`"></slot>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="p-5 md:col-span-2">
                    <p class="p-5 text-amber-700/70  uppercase text-sm font-semibold">Day 2 - Matsuri Area</p>
                    <ul class="grid md:grid-cols-2 gap-10">
                        <li v-for="item in 4" class="bg-white p-5">
                            <h3 class="font-bold text-gray-900 mb-2">
                                <slot :name="`expo-card-${item}-title`"></slot>
                            </h3>
                            <div class="w-10 h-0.5 bg-yellow-500 my-3"></div>
                            <p class="text-gray-600 leading-7">
                                <slot :name="`expo-card-${item}-content`"></slot>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col col-span-full bg-slate-100 p-10 gap-5 relative">
                    <div class="absolute left-0 top-0 bottom-0 w-10 bg-slate-200">
                        <BrandingPattern class="opacity-50"></BrandingPattern>
                    </div>
                    <div class="pl-5">
                        <div class="text-slate-900 font-semibold mb-1">
                            <slot name="register-title"></slot>
                        </div>
                        <div class="text-slate-600">
                            <slot name="register-content"></slot>
                        </div>
                    </div>
                    <PrimaryButton class="w-min whitespace-nowrap ml-5">
                        <slot name="register-button"></slot>
                    </PrimaryButton>
                </div>

            </div>

        </div>
    </Container>
</template>

<script setup lang="ts">
import VenueDay1Img from "../../assets/osaka-africa-business-forum/data_016.jpg";
import {MapPinIcon, PhoneIcon} from "@heroicons/vue/24/outline";
import PanelDiscussionImg from "../../assets/osaka-africa-business-forum/data_467.jpg";
import WorkshopImg from "../../assets/osaka-africa-business-forum/data_604.jpg";
import BoothImg from "../../assets/osaka-africa-business-forum/data_071.jpg";
import SackoImg from "../../assets/osaka-africa-business-forum/data_330_transparent.png";
import ExpoImg from "../../assets/osaka-africa-business-forum/data_090.jpg";
import EngagedImg from "../../assets/osaka-africa-business-forum/data_358.jpg";
import BusinessForumGroupImg from "../../assets/osaka-africa-business-forum/data_586_black-bg.jpg";
import Container from "../layout/Container.vue";
import BrandingPattern from "../branding/BrandingPattern.vue";
import PrimaryButton from "../base/PrimaryButton.vue";
import ExpoMapImg from "../../assets/osaka-africa-business-forum/expo-map.jpg";
import {defaultLang} from "@i18n/ui.js";
import {useTranslations} from "@i18n/utils.js";

const props = withDefaults(defineProps<{
    lang: string
}>(), {
    lang: defaultLang
});

const t = useTranslations(props.lang);
</script>
