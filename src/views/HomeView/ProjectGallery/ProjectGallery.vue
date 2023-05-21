<template>
    <div class="relative z-10 rounded-lg border-2 border-gray-400 max-w-7xl bg-primary-background-color mx-5 lg:p-10">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-10 lg:mb-20 px-10 pt-10">
            <GalleryHeading class="w-2/3 lg:w-auto" />

            <p class="leading-loose text-gray-700">I've collected a small selection of personal projects and work that I value greatly. These items in particular show the additional effort I have invested in them, forming a noticeable pattern.</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-5 p-5 lg:px-0">
            <ProjectGalleryItem
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import GalleryHeading from "@/views/HomeView/ProjectGallery/GalleryHeading"
import ProjectGalleryItem from "@/views/HomeView/ProjectGallery/ProjectGalleryItem"

export type Uri = string

export type ProjectAttribute = string

export interface ProjectItem {
    id: number
    title: string
    description: string
    image: Uri,
    attributes: ProjectAttribute[]
}

const projects: ProjectItem[] = [
    {
        id: 1,
        title: "🇯🇵 Display",
        description: "Video player for learning Japanese.",
        image: "display.png",
        attributes: ["TypeScript", "Tailwindcss", "Vue", "Electron"]
    },
    {
        id: 2,
        title: "🎺 Record Tracker",
        description: "A tool for keeping track of your records.",
        image: "record-tracker.png",
        attributes: ["TypeScript", "Tailwindcss", "Vue", "Electron"]
    },
    {
        id: 3,
        title: "🐶 Pokémon Battle",
        description: "Recreated Pokémon battle using data from the PokéAPI!",
        image: "pokemon.png",
        attributes: ["JavaScript"]
    }
]
</script>
