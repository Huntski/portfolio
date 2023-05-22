<template>
    <div class="relative z-10 rounded-lg border-2 border-gray-400 max-w-7xl bg-primary-background-color mx-2 lg:p-10">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-10 lg:mb-20 px-10 pt-10">
            <GalleryHeading class="w-2/3 lg:w-auto" />

            <p class="leading-loose text-gray-700">I've collected a small selection of personal projects and work that I value greatly. These items in particular show the additional effort I have invested in them, forming a noticeable pattern.</p>
        </div>

        <div class="flex justify-start gap-5 px-10 mb-10">
            <button @click="changeGallery('projects')" class="flex items-center gap-8 text-white bg-[#292929] hover:opacity-75 py-3 px-5 rounded-lg"
                    :class="{'bg-primary-focus': selectedGallery === 'projects'}"
            >
                <span class="font-bold">APPLICATIONS</span>
            </button>

            <button @click="changeGallery('designs')" class="flex items-center gap-8 text-white bg-[#292929] hover:opacity-75 py-3 px-5 rounded-lg"
                    :class="{'bg-primary-focus': selectedGallery === 'designs'}"
            >
                <span class="font-bold">DESIGNS</span>
            </button>
        </div>

        <div class="grid lg:grid-cols-2 gap-5 p-5 lg:px-0">
            <GalleryApplication
                v-for="project in projects"
                :key="project.id"
                :project="project"
                v-show="selectedGallery === 'projects'"
            />

            <GalleryDesign
                v-for="design in designs"
                :key="design.id"
                :design="design"
                v-show="selectedGallery === 'designs'"
            />
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import store from "@/store"
import GalleryApplication from "@/views/HomeView/ProjectGallery/GalleryApplication"
import GalleryDesign from "@/views/HomeView/ProjectGallery/GalleryDesign"
import GalleryHeading from "@/views/HomeView/ProjectGallery/GalleryHeading"

export type SelectedGallery = 'projects' | 'designs'

export default defineComponent({
    components: {
        GalleryApplication,
        GalleryHeading,
        GalleryDesign
    },

    data() {
        return {
            selectedGallery: 'projects' as SelectedGallery
        }
    },

    computed: {
        projects() {
            return store.getters.getProjects
        },

        designs() {
            return store.getters.getDesigns
        }
    },

    methods: {
        changeGallery(gallery: SelectedGallery) {

            this.selectedGallery = gallery
            console.log(gallery)
        },
    }
})
</script>
