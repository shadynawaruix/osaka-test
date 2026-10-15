<template>
    <div
            class="min-h-screen bg-white flex flex-col relative md:pt-28"
     >
        <div class="absolute left-0 top-28 bottom-0 md:right-[calc(50%+565px)] bg-red-800">
            <div class="absolute top-0 right-0 bottom-0 w-14 bg-white/10">
                <BrandingPattern></BrandingPattern>
            </div>
        </div>
        <div class="w-full max-w-screen-lg mx-auto flex grow relative">
            <div class="flex flex-col w-full relative">
                <div class="grid grid-cols-1 w-full grow">
                    <div class="-mt-16 md:mt-0 z-10">
                        <div class="-mx-10">
                            <!--<div
                                    class="uppercase font-extrabold text-[#d19e2b] tracking-wide text-3xl md:text-[50pt]/[1.1]"
                            >Osaka
                            </div>
                            <div
                                    class="uppercase font-extrabold text-slate-800 tracking-wide text-3xl md:text-[50pt]/[1.1]"
                            >Africa
                            </div>
                            <div
                                    class="uppercase font-extrabold text-slate-800 tracking-wide text-3xl md:text-[50pt]/[1.1]"
                            >Business
                            </div>
                            <div
                                    class="uppercase font-extrabold text-slate-800 tracking-wide text-3xl md:text-[50pt]/[1.1]"
                            >Forum
                            </div>
                            <div
                                    class="uppercase font-extrabold text-slate-800 tracking-wide text-3xl md:text-[50pt]/[1.1]"
                            >2024
                            </div> -->
                            
                            <img class="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px]" src="https://adnjapan.org/wp-content/uploads/2025/08/key_visual_2025_3.png" >
                            
                            
                           <!--  -->
                            
                        </div>
                        <div class="my-5 md:my-12 flex gap-4 z-20 text-sm md:text-base w-full md:w-auto justify-between md:justify-start">
                            <div>{{ t("info.date1") }}</div>
                            <div class="w-[1px] border-r border-[#d19e2b]"></div>
                            <div>{{ t("info.time1") }}</div>
                            <div class="w-[1px] border-r border-[#d19e2b]"></div>
                            <div>{{ t("info.date2") }}</div>
                            <div class="w-[1px] border-r border-[#d19e2b]"></div>
                            <div>{{ t("info.time2") }}</div>
                            <div class="w-[1px] border-r border-[#d19e2b]"></div>
                            <div>{{ t("info.location") }}</div>
                            <div class="w-[1px] border-r border-[#d19e2b]"></div>
                            <div>{{ t("info.ticad9") }}</div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-5 text-base">
                           <!-- <PrimaryButton href="/register" class="shadow px-8">{{ t("hero.register") }}</PrimaryButton>  -->
                             <PrimaryButton href="https://reg26.smp.ne.jp/regist/is?SMPFORM=mat-qakck-fffeb09ae055f3273065a79099a664cc&_gl=1*1bpbc7a*_ga*MTA4NjkzODE5Ni4xNzI0NzQyMDE5*_ga_FGHYHJ7PV4*MTcyNjEzNDc4Ny4yLjEuMTcyNjEzNDg2OS42MC4wLjA." class="shadow px-8">{{ t("hero.register") }}</PrimaryButton>
                            <BaseButton
                                    @click="showVideo = true"
                                    class="border rounded px-4 py-2 flex items-center justify-center text-slate-700 hover:bg-slate-200">
                                <PlayIcon class="inline-block w-[1em] h-[1em] mr-2 mt-0.5"></PlayIcon>
                               {{ t("hero.recap") }}
                            </BaseButton>
                        </div>
                    </div>
                    <!-- <div class="grow py-10 pt-20 order-first md:order-none">
                        <div class="w-[70%] md:w-full mx-auto h-auto aspect-square rounded-full bg-[#d19e2b] relative">

                            <div class="absolute -inset-5 rounded-full border-l border-dashed border-[#d19e2b] rotate-45"></div>
                            <div class="absolute inset-5 rounded-full border-r border-dashed -rotate-12"></div>

                             <img  class="w-full h-full scale-125" src="https://adnjapan.org/wp-content/uploads/2024/09/key_visual1.jpeg" >
                            
                             <img  class="w-full h-full scale-125" :src="HeroCircleImg" > 

                        </div>
                    </div> -->
                </div>
                <div class="flex flex-wrap px-5 pb-10 gap-10 mt-20 md:mt-0  relative w-full justify-center md:justify-start">
                    <div>
                        <div class="text-gray-500 text-center md:text-left text-xs py-5 px-5">
                            {{ t("hero.organizedBy") }}
                        </div>
                        <div class="text-sm text-gray-600">
                            <div class="h-[150px] bg-slate-50 flex items-center justify-center p-5 group">
                                <!--
                                <div class="flex items-center gap-2">
                                    <LogoBanner
                                            class="md:grayscale group-hover:grayscale-0"
                                            initiative="connect" :show-pattern="false" size="w-16"></LogoBanner>
                                    <div class="flex flex-col justify-center">
                                        <div class="text-xs font-bold text-slate-800 tracking-wider group-hover:text-sky-700">
                                            Africa Diaspora Network
                                        </div>
                                        <div class="text-xs">Japan</div>
                                    </div>
                                </div>
                                -->
                                <img class="md:grayscale-0 group-hover:grayscale-0 h-[80%] w-auto mix-blend-multiply"
                                     :src="LogoAdnj">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="text-gray-500 text-xs py-5 px-5 text-center md:text-left">
                            {{ t("hero.cohostedBy") }}
                        </div>
                        <div class="grid grid-cols-2 max-w-prose mx-auto gap-0.5 rounded-2xl text-sm text-gray-600">
                            <div class="h-[150px] bg-slate-50 flex items-center justify-center p-5 text-center group">
                                <img class="md:grayscale-0 group-hover:grayscale-0 h-[70%] w-auto mix-blend-multiply"
                                     src="https://adnjapan.org/wp-content/uploads/2022/09/Copy-of-HigashiOsaka-Logo-.jpeg">
                            </div>
                            <div class="h-[150px] bg-slate-50 flex items-center justify-center p-5 text-center relative group">
                                <img class="md:grayscale-0 group-hover:grayscale-0 h-[80%] w-auto mix-blend-multiply"
                                     src="https://adnjapan.org/wp-content/uploads/2022/09/Copy-of-SMEs-Orani.jpeg">
                            </div>
                             
                        </div>
                    </div>

                    <div>
                        <div class="text-gray-500 text-xs py-5 px-5 text-center md:text-left">
                            
                        </div>
                        <div class="grid grid-cols-1 max-w-prose mx-auto gap-0 text-sm text-gray-600">

                            <div class="h-[150px] bg-slate-50 flex items-center justify-center p-5 text-center group">
                            <img class="md:grayscale-0 group-hover:grayscale-0 h-[60%] w-auto mix-blend-multiply"
                                     src="https://adnjapan.org/wp-content/uploads/2023/08/Osaka-Chamber-of-Commerce-Logo1.jpeg">
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="absolute right-0 top-32 bottom-0 left-[calc(50%+640px)] bg-slate-100">
        </div>

        <Teleport v-if="showTeleport" to="body">
            <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform opacity-0"
                    enter-to-class="transform opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform opacity-100"
                    leave-to-class="transform opacity-0"
            >
                <div v-if="showVideo" @click="showVideo = false"
                     class="bg-black/70 transition-all fixed inset-0 z-50 flex justify-center items-center">

                    <div class="w-full max-w-screen-lg">
                        <div class="flex justify-end">
                            <button class="p-4 hover:bg-white/20">
                                <XCircleIcon class="w-8 h-8 text-white"></XCircleIcon>
                            </button>
                        </div>
                        <div class="w-full pb-[56.25%] relative overflow-hidden mx-auto">
                            <iframe class="absolute inset-0 w-full h-full"
                                    src="https://www.youtube-nocookie.com/embed/UkYpNRfPZtc"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import PrimaryButton from "../base/PrimaryButton.vue";
import BaseButton from "../base/BaseButton.vue";
import {PlayIcon, XCircleIcon} from "@heroicons/vue/24/solid";
import HeroCircleImg from "../../assets/osaka-africa-business-forum/hero-circle.png";
import LogoSaraya from "@assets/logo-saraya.webp";
import LogoAdnj from "@assets/adnj-logo-old.png";
import {useTranslations} from "@i18n/utils.js";
import {defaultLang} from "@i18n/ui.js";
import LogoBanner from "@components/branding/LogoBanner.vue";
import {onMounted, ref} from "vue";
import BrandingPattern from "@components/branding/BrandingPattern.vue";

const props = withDefaults(defineProps<{
    lang: string
}>(), {
    lang: defaultLang
});

const t = useTranslations(props.lang);

const showVideo = ref<boolean>(false);
const showTeleport = ref<boolean>(false);

onMounted(() =>
{
    showTeleport.value = true;
})

</script>
