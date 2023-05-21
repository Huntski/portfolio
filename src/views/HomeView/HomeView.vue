<template>
    <div class="mt-52 flex justify-between w-full max-w-6xl mx-auto relative pb-20 px-10">
        <NameHeading />

        <SocialLinks />

        <RightDecoration class="absolute -right-10 -bottom-10 z-[1]" />

        <div class="opacity-0 lg:opacity-100 transition-opacity absolute -left-[45%] -top-[190%] w-[140%] aspect-square rounded-full bg-white"></div>
    </div>

    <ProjectGallery />
</template>

<script lang="ts" setup>
import SocialLinks from "@/views/HomeView/SocialLinks"
import NameHeading from "@/views/HomeView/NameHeading"
import ProjectGallery from "@/views/HomeView/ProjectGallery"
import RightDecoration from "@/views/HomeView/RightDecoration.vue"
</script>
