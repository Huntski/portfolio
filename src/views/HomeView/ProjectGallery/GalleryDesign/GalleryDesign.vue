<template>
    <div tabindex="0" class="relative aspect-[3/2] rounded-lg overflow-hidden group cursor-pointer border-2 border-gray-200" @click="openPdfDocument(design.src)">
        <div class="absolute top-0 left-0 h-full bg-gradient-to-b from-[#00000020] to-[#00000095] flex flex-col p-5 w-full rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="p-4 text-white mt-auto">
                <h2 class="font-bold font-captions text-4xl">{{design.title}}</h2>
                <span>Click to open PDF.</span>
            </div>
        </div>

        <img :src="loadThumbnail(design.thumbnail)"
             :alt="design.title"
             class="relative object-cover object-top cursor-pointer aspect-[3/2] rounded-lg"
        >
    </div>
</template>

<script lang="ts">
import {PropType, defineComponent} from "vue"
import {Design} from "@/store"

export default defineComponent({
    props: {
        design: {
            type: Object as PropType<Design>,
            required: true
        }
    },

    methods: {
        loadThumbnail(file: string) {
            return require(`@/assets/${file}`)
        },

        openPdfDocument(document: string) {
            const domain = window.location.protocol + '//' + window.location.host
            window.open(`${domain}${document}`, '_blank')
        }
    }
})
</script>
