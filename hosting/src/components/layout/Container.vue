<template>

    <div class="w-full py-20" v-bind="$attrs">

        <div v-if="separator"
             class="w-full bg-white text-center py-10 relative gap-3 -mt-20 mb-20 flex items-center justify-center">

            <div class="w-full h-3 flex items-center">
                <div class="w-full h-px bg-red-700/20"></div>
            </div>

            <div class="flex gap-2">
                <div class="w-3 h-3 bg-red-700/20"></div>
                <div class="w-3 h-3 bg-red-700/20"></div>
                <div class="w-3 h-3 bg-red-700/20"></div>
            </div>

            <div class="w-full h-3 flex items-center">
                <div class="w-full h-px bg-red-700/20"></div>
            </div>
            <!--
            <div class="absolute left-0 top-0 bottom-0 md:right-[calc(50%+565px)] bg-sky-700">
                <div class="absolute top-0 right-0 bottom-0 w-14 bg-white/20">

                </div>
            </div>

            <div class="absolute left-1/2 top-0 bottom-0 right-0  -skew-x-12">
                <div class="absolute top-0 left-0 bottom-0 w-px bg-sky-700/50 ">
                </div>
                <div class="absolute top-0 left-2 bottom-0 w-px bg-sky-700/30">
                </div>
                <div class="absolute top-0 left-4 bottom-0 w-px bg-sky-700/20">
                </div>
                <div class="absolute top-0 left-6 bottom-0 w-px bg-sky-700/10">
                </div>
                <div class="absolute top-0 left-8 bottom-0 w-px bg-sky-700/5">
                </div>
            </div>
            <div class="absolute left-[calc(50%-565px)] top-0 bottom-0 right-0 ">
            </div>
            -->
        </div>

        <div class="max-w-screen-xl mx-auto px-2 md:px-5 w-full relative" :class="innerClass">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false
};
</script>

<script setup lang="ts">
withDefaults(defineProps<{
    separator: boolean,
    innerClass?: string
}>(), {
    separator: true
});
</script>
