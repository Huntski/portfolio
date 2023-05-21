<template>
    <div
        class="base-attribute font-bold flex items-center justify-start gap-4 px-5 py-3 rounded shadow-md"
        :style="attributeStyling"
>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import {computed, defineProps} from "vue"

const props = defineProps<{
    color: string
    background: string
}>()

const attributeStyling = computed(() => {
    return {
        color: props.color ? props.color: "#000",
        backgroundColor: props.background ? props.background: "#fff"
    }
})
</script>

<style>
.base-attribute svg,
.base-attribute img {
    width: 25px;
}
</style>
