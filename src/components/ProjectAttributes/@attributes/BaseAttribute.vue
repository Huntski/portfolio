<template>
    <div
        class="base-attribute font-bold flex items-center justify-start gap-4 px-5 py-3 rounded shadow-md"
        :style="attributeStyling"
>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
    props: {
        color: {
            type: String,
            default: "#000"
        },
        background: {
            type: String,
            default: "#fff"
        }
    },

    computed: {
        attributeStyling() {
            return {
                color: this.color ? this.color: "#000",
                backgroundColor: this.background ? this.background: "#fff"
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
