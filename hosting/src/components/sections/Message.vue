<template>
    <Container class="bg-slate-100" inner-class="py-10 gap-10 flex flex-col md:flex-row justify-center">
        <div class="relative">
            <div class="md:sticky top-20">
                <img
                        class="h-[500px] w-[400px] object-cover rounded-sm -mt-20  "
                        :src="image"
                >
                <div class="text-slate-600 p-5 text-sm italic max-w-[400px]">
                    <slot name="image-caption"></slot>
                </div>
            </div>
        </div>
        <div
                class="relative rounded-sm overflow-hidden bg-white shadow-lg p-4 py-20 pl-14 md:p-20 md:pl-24"
                :class="order === 'inverted' ? 'order-first' : 'order-first md:order-none'"
        >
            <div class="absolute left-0 top-0 bottom-0 w-10 bg-red-800">
                <BrandingPattern style="opacity: 20%"></BrandingPattern>
            </div>
            <h2 class="text-xl font-bold max-w-md leading-8">
                <slot name="title"></slot>
            </h2>
            <div class="w-20 h-0.5 bg-amber-700/50 my-10"></div>
            <div class="flex flex-col gap-5 leading-8 mt-10 text-gray-600 max-w-prose">
                <slot></slot>
            </div>
            <div class="mt-10 text-gray-600 italic">
                <slot name="signature"></slot>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
import Container from "@components/layout/Container.vue";
import BrandingPattern from "@components/branding/BrandingPattern.vue";

defineProps<{
    image: string,
    order: "default" | "inverted"
}>();
</script>
