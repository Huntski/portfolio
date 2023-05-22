<template>
    <header class="relative -z-0 flex items-center gap-3 max-w-7xl w-full mx-auto p-10 mt-20">
        <LogoSmallSvg class="w-20" />
        <div class="w-3 aspect-square rounded-full bg-red-600"></div>

        <div class="opacity-0 overscroll-none overflow-hidden lg:opacity-100 transition-opacity pointer-events-none absolute -z-10 -left-[45%] -top-[300%] w-[140%] aspect-square rounded-full bg-white"></div>
    </header>
</template>

<script lang="ts" setup>
import LogoSmallSvg from "./LogoSmallSvg.vue"
</script>
