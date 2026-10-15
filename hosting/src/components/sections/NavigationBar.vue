<template>
    <BaseTopNavigation
            initial-class="pb-2"
            scrolled-class="pb-2"
            :items="items"
    >
        <template #left>
            <a href="/" class="flex items-start gap-2 transition-all ease-linear group "
               :class="showFullHeader ? '' : 'pt-2 md:pt-0'">
                <LogoBanner initiative="unite" :padding="logoPadding"></LogoBanner>
                <div class="flex-col justify-end h-full py-2"
                     :class="showFullHeader ? ( alwaysShowLogoLabel ? 'flex' : 'hidden md:flex') : 'flex'">
                    <div class="text-xs font-bold text-[#d19e2b] group-hover:underline">Osaka</div>
                    <div class="text-xs font-bold group-hover:underline">Africa Business Forum</div>
                </div>
            </a>
        </template>
        <template #center>
            <a
                    v-for="item in items"
                    v-if="showMainNav"
                    :href="item.link"
                    :id="'main-nav-link-'+item.id"
                    class="text-gray-600 group hover:text-gray-900 border-b-2 border-transparent hover:border-red-700/50 cursor-pointer px-4 py-3"
                    :class="activeSectionId == item.id ? 'text-red-800 font-semibold' : ''"
            >
                {{ item.label }}
            </a>
            <div
                    v-if="showMainNav"
                    ref="menuIndicator"
                    class="absolute left-0 bottom-2 w-0 h-0.5 bg-red-700 transition-all duration-300 ease-in-out"
            ></div>
        </template>
        <template #right>
            <div class="flex lg:pb-1 gap-5 transition-all ease-linear"
                 :class="showFullHeader ? 'pb-6 lg:pb-1 pr-3 lg:pr-0' : 'pb-1 pr-3 lg:pr-0'">
                <PrimaryButton href="https://reg26.smp.ne.jp/regist/is?SMPFORM=mat-qakck-fffeb09ae055f3273065a79099a664cc&_gl=1*1bpbc7a*_ga*MTA4NjkzODE5Ni4xNzI0NzQyMDE5*_ga_FGHYHJ7PV4*MTcyNjEzNDc4Ny4yLjEuMTcyNjEzNDg2OS42MC4wLjA." v-if="showMainNav" class="hidden md:block text-sm" :color="buttonStyle">
                    {{ t("nav.register") }}
                </PrimaryButton>
                <!-- <PrimaryButton href="/register" v-if="showMainNav" class="hidden md:block text-sm" :color="buttonStyle">
                    {{ t("nav.register") }}
                </PrimaryButton> -->
                
                <BaseDropdown
                        class="hover:bg-gray-200 p-2 rounded flex items-center text-gray-600 hover:text-gray-900"
                        :items="languageItems"
                        :current="lang"
                        @select="onSelectLanguage"
                >
                    <LanguageIcon class="w-5 h-5"></LanguageIcon>
                    <ChevronDownIcon class="w-3 h-3"></ChevronDownIcon>
                </BaseDropdown>
                <div v-if="showMainNav" class="flex lg:hidden items-center">
                    <BaseDropdown @select="onNavigateTo" :items="items" class="p-2">
                        <Bars3Icon class="w-6 h-6"></Bars3Icon>
                    </BaseDropdown>
                </div>
            </div>
        </template>
    </BaseTopNavigation>
</template>

<script setup lang="ts">
import {LanguageIcon, ChevronDownIcon, Bars3Icon} from "@heroicons/vue/24/outline";
import PrimaryButton from "@components/base/PrimaryButton.vue";
import LogoBanner from "@components/branding/LogoBanner.vue";
import {useWindowScroll, useWindowSize} from "@vueuse/core";
import {computed, nextTick, onBeforeMount, onMounted, ref, watch} from "vue";
import BaseTopNavigation from "@components/base/BaseTopNavigation.vue";
import {defaultLang, languages} from "@i18n/ui";
import {getLangFromUrl, setLangInUrl, urlHasLanguageCode, useTranslations} from "@i18n/utils";
import BaseDropdown from "@components/base/BaseDropdown.vue";
import Cookies from "js-cookie";

const props = withDefaults(defineProps<{
    lang: string,
    showMainNav: boolean,
    alwaysShowLogoLabel: boolean,
}>(), {
    lang: defaultLang,
    showMainNav: true
});

const t = useTranslations(props.lang);

const {x, y} = useWindowScroll();

const menuIndicator = ref<HTMLElement>();

const showFullHeader = computed(() => y.value <= 20);
const buttonStyle = computed(() => y.value > 20 ? "black" : "black-text");
const logoPadding = computed(() => y.value <= 20);

const languageItems = computed(() =>
{
    const result = [];
    Object.entries(languages).map(language =>
    {
        result.push({
            id: language[0],
            label: language[1]
        })
    })

    return result;
})

const items = [
    {
        id: "info",
        label: t("nav.info"),
        link: "#info"
    },
    {
        id: "forum",
        label: t("nav.forum"),
        link: "#forum"
    },
    {
        id: "expo",
        label: t("nav.expo"),
        link: "#expo"
    },
    {
        id: "message",
        label: t("nav.message"),
        link: "#message"
    },
    {
        id: "speakers",
        label: t("nav.speakers"),
        link: "#speakers"
    },
    {
        id: "program",
        label: t("nav.program"),
        link: "#program"
    },
    {
        id: "sponsors",
        label: t("nav.sponsors"),
        link: "#sponsors"
    }
];

const windowSize = useWindowSize();
const windowScroll = useWindowScroll();

let sections: HTMLElement[] = [];
const activeSectionId = ref<string>();

watch(windowScroll.y, updateIndicator);
watch(windowSize.width, updateIndicator);
watch(windowSize.height, updateIndicator);

onBeforeMount(() =>
{
    const storedScroll = sessionStorage.getItem("scroll");
    if (storedScroll)
    {
        sessionStorage.removeItem("scroll");
        window.scrollTo(0, parseFloat(storedScroll));
    }
})

onMounted(() =>
{
    nextTick(() =>
    {
        if (!import.meta.SSR)
        {
            sections = items.map(item => document.getElementById(item.id));
            updateIndicator();
        }
    });

});

function updateIndicator()
{
    let currentSection;
    for (const section of sections)
    {
        if (section)
        {
            const rect = section.getBoundingClientRect();
            if (rect.top < windowSize.height.value / 2)
                currentSection = section;
        }
    }

    if (currentSection)
    {
        if (currentSection.id !== activeSectionId.value)
        {
            activeSectionId.value = currentSection.id;
            const menuItem = document.getElementById("main-nav-link-" + currentSection.id);
            menuIndicator.value.style.left = menuItem.offsetLeft + "px";
            menuIndicator.value.style.width = menuItem.clientWidth + "px";
        }
    }
    else
    {
        if (activeSectionId.value)
        {
            activeSectionId.value = "";
            menuIndicator.value.style.left = "0px";
            menuIndicator.value.style.width = "0px";
        }
    }

    if (activeSectionId.value)
        history.pushState({}, "", "#" + activeSectionId.value)
    else
        history.pushState({}, "", window.location.pathname + window.location.search);
}

function onSelectLanguage(languageCode: string)
{
    Cookies.set("firebase-language-override", languageCode, {path: "/", expires: 7});

    if (urlHasLanguageCode(new URL(window.location.href)))
    {
        sessionStorage.setItem("scroll", String(window.scrollY));
        window.location.assign(setLangInUrl(new URL(window.location.href), languageCode));
    }
    else
    {
        window.location.reload();
    }
}

function onNavigateTo(id: string)
{
    window.location.hash = "#" + id;
}

</script>
