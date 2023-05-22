<template>
    <div @click="$router.push({name: 'ProjectView', params: {id: project.id}})" class="project-gallery-item aspect-[3/2] rounded-lg relative group overflow-hidden cursor-pointer hover:shadow-lg border border-gray-300">
        <div class="absolute top-0 left-0 h-full bg-gradient-to-b from-[#00000020] to-[#00000095] flex flex-col p-5 w-full rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ProjectAttributes class="pointer-events-none" :attributes="props.project.attributes" />

            <div class="project-description mt-auto text-white">
                <h2 class="font-bold font-captions text-3xl">{{project.title}}</h2>
                <p class="text-xl">{{project.summery}}</p>
            </div>
        </div>

        <img :src="loadThumbnail()" alt="project.title" class="relative w-full h-full object-cover">
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue"
import {ProjectItem} from "@/store"
import ProjectAttributes from "@/components/ProjectAttributes"

const props = defineProps< {project: ProjectItem}>()

function loadThumbnail() {
    return require(`@/assets/applications/${props.project.image}`)
}
</script>

<style scoped>
.project-description {
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(20px);
}

.project-gallery-item:hover .project-description {
    opacity: 1;
    transform: translateY(0);
}
</style>
