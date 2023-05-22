<template>
    <button
        class="base-attribute font-bold flex items-center justify-start gap-4 px-5 py-3 rounded shadow-md cursor-pointer hover:opacity-75"
        :style="attributeStyling"
        @click="handleClickEvent"
>
        <slot></slot>
    </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {Url} from "@/store"

export default defineComponent({
    props: {
        color: {
            type: String,
            default: "#000",
            required: false
        },
        background: {
            type: String,
            default: "#fff",
            required: false
        },
        link: {
            type: String as PropType<Url>,
            required: false
        }
    },

    computed: {
        attributeStyling() {
            return {
                color: this.color ? this.color: "#000",
                backgroundColor: this.background ? this.background: "#fff"
            }
        }
    },

    methods: {
        handleClickEvent() {
            if (this.link) {
                return window.open(this.link, "_blank")
            }
        }
    }
})
</script>

<style>
.base-attribute svg,
.base-attribute img {
    width: 25px;
}
</style>
