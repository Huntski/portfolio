<template>
    <div class="mt-10 flex flex-col items-center relative pb-20 px-10">
        <div class="w-full max-w-7xl xl:px-10">
            <ReturnButton @click="$router.go(-1)" class="mb-20" />

            <div class="grid xl:grid-cols-2 gap-20 xl:gap-0 mb-20 items-center">
                <h1 class="text-primary-focus text-5xl lg:text-7xl font-captions font-bold">{{project.title}}</h1>
                <p class="leading-loose text-[#7C7C7C] max-w-3xl whitespace-pre-line">{{project.description}}</p>
            </div>
        </div>

        <div class="flex justify-between flex-wrap w-full w-full max-w-7xl mb-20 pt-20 border-t-2 border-gray-200">
            <div>
                <h2 class="font-bold text-2xl mb-5">Made with:</h2>
                <ProjectAttributes :attributes="project.attributes" />
            </div>

            <div class="w-full xl:w-auto mt-20 xl:mt-0 flex flex-col flex-col xl:flex-row flex-wrap items-end gap-5">
                <button v-if="project.website" @click="openWindow(project.website)" class="flex items-center gap-8 text-white bg-[#924FFF] hover:opacity-75 py-3 px-5 rounded-lg">
                    <ComputerIcon class="w-6" />

                    <span class="font-bold">LIVE VERSION</span>
                </button>

                <button v-if="project.github" @click="openWindow(project.github)" class="flex items-center gap-8 text-white bg-[#292929] hover:opacity-75 py-3 px-5 rounded-lg">
                    <GithubLogo class="w-6" />

                    <span class="font-bold">SOURCE CODE</span>
                </button>
            </div>
        </div>

        <div v-if="project" class="grid lg:grid-cols-2 gap-3 w-full max-w-8xl mb-20">
            <img v-for="illustration in project.illustrations"
                 :key="illustration"
                 :src="loadProjectIllustration(illustration)"
                 alt="project.title"
                 class="relative w-full h-full rounded border-2 border-gray-100">
        </div>
    </div>
</template>

<script lang="ts">
import ReturnButton from "@/views/ProjectView/ReturnButton"
import router from "@/router"
import {defineComponent} from "vue"
import store, {ProjectItem, Url} from "@/store"
import {GithubLogo} from "@/components/@logos"
import {ComputerIcon} from "@/components/@icons"
import ProjectAttributes from "@/components/ProjectAttributes"

export default defineComponent({
    components: {
        ReturnButton,
        GithubLogo,
        ComputerIcon,
        ProjectAttributes
    },

    computed: {
        project(): ProjectItem {
            return store.getters.getProjects.filter(
                (project: ProjectItem) => project.id === parseInt(router.currentRoute.value.params.id as string)
            )[0]
        }
    },

    methods: {
        loadProjectIllustration(path: string) {
            return require(`@/assets/applications/${path}`)
        },

        openWindow(url: Url) {
            window.open(url, '_blank')
        }
    },
})
</script>
