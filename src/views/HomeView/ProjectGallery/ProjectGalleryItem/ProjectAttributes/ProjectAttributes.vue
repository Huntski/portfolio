<template>
    <div class="flex flex-wrap gap-3 items-start">
        <component v-for="attribute in attributes" :key="attribute" :is="importComponent(attribute)"></component>
    </div>
</template>

<script lang="ts" setup>
import {defineProps, defineAsyncComponent} from "vue"
import {ProjectAttribute} from "@/views/HomeView/ProjectGallery/ProjectGallery.vue"

defineProps<{attributes: ProjectAttribute[]}>()

function importComponent(attributeName: string) {
    return defineAsyncComponent(() => import(`./@attributes/${attributeName}Attribute.vue`))
}
</script>
