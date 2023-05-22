<template>
    <a target="_blank" :href="href" class="social-link hover:opacity-70 flex items-center justify-center p-6">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
    props: {
        href: {
            type: String,
            required: true
        }
    }
})
</script>

<style>
.social-link img,
.social-link svg {
    height: 3rem;
    aspect-ratio: 1 / 1;
}
</style>
