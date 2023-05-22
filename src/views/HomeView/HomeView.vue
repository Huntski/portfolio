<template>
    <div class="flex flex-col items-center">
        <div class="mt-40 flex justify-between flex-col lg:flex-row gap-5 w-full max-w-7xl relative pb-20 px-10">
            <NameHeading />

            <SocialLinks class="self-start" />

            <RightDecoration class="absolute -right-24 -bottom-10 z-[1]" />
        </div>

        <ProjectGallery />
    </div>
</template>

<script lang="ts" setup>
import SocialLinks from "@/views/HomeView/SocialLinks"
import NameHeading from "@/views/HomeView/NameHeading"
import ProjectGallery from "@/views/HomeView/ProjectGallery"
import RightDecoration from "@/views/HomeView/RightDecoration.vue"
</script>
