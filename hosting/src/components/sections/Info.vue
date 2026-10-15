<template>
    <Container>
        <div class="col-span-full flex flex-col max-w-prose mx-auto gap-10 leading-8 px-10 md:px-0">
            <h2 class="text-3xl md:text-5xl font-bold text-slate-600 -ml-5 md:-ml-10 leading-tight">
                <slot name="title"></slot>
            </h2>
            <p class="border-l pl-10 border-amber-700/50">
                <slot name="description"></slot>
            </p>
        </div>
        <ul class="w-full grid grid-cols-1 md:grid-cols-3 p-5 gap-10 mt-10">
            <li class="bg-white h-min">
                <img :src="WorkshopImg">
                <div class="p-5">
                    <div class="font-bold mb-2 leading-7">
                        <slot name="card-1-title"></slot>
                    </div>
                    <div class="w-10 h-0.5 bg-amber-700/50 my-5"></div>
                    <div class="text-slate-600 leading-7">
                        <slot name="card-1-content"></slot>
                    </div>
                </div>
            </li>
            <li class="bg-white md:mt-20 h-min">
                <img src="https://adnjapan.org/wp-content/uploads/2023/07/data_059-scaled.jpg">
                <div class="p-5">
                    <div class="font-bold mb-2 leading-7">
                        <slot name="card-2-title"></slot>
                    </div>
                    <div class="w-10 h-0.5 bg-amber-700/50 my-5"></div>
                    <div class="text-slate-600 leading-7">
                        <slot name="card-2-content"></slot>
                    </div>
                </div>
            </li>
            <li class="bg-white md:mt-40 h-min">
                <img src="https://adnjapan.org/wp-content/uploads/2023/07/Real-Africa-.jpeg">
                <div class="p-5">
                    <div class="font-bold mb-2 leading-7">
                        <slot name="card-3-title"></slot>
                    </div>
                    <div class="w-10 h-0.5 bg-amber-700/50 my-5"></div>
                    <div class="text-slate-600 leading-7">
                        <slot name="card-3-content"></slot>
                    </div>
                </div>
            </li>
        </ul>
    </Container>
</template>

<script setup>
import WorkshopImg from "../../assets/osaka-africa-business-forum/data_604.jpg";
import Container from "../layout/Container.vue";
</script>
