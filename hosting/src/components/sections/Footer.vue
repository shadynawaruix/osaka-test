<template>
    <footer class="bg-white">
        <div class="mx-auto max-w-7xl px-6 py-12 space-y-5 md:grid md:grid-cols-3 md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center md:justify-end space-x-6 md:order-3">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">{{ item.name }}</span>
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true"/>
                </a>
            </div>
            <div class="md:order-2 text-center text-sm">
                <a href="https://adnjapan.org/" target="_blank"
                   class="text-red-700 hover:underline">www.adnjapan.org</a>
            </div>
            <div class="md:order-1 md:mt-0">
                <p class="text-center text-sm leading-5 text-gray-500">&copy; 2024 Africa Diaspora Network Japan. All
                    rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import {defineComponent, h} from 'vue'

const navigation = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/ADNJ2020/',
        icon: defineComponent({
            render: () =>
                h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    },
]
</script>
