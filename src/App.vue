<template>
    <div id="app" class="overflow-x-hidden flex flex-col bg-white lg:bg-primary-background-color min-h-screen transition-colors flex flex-col items-center">
        <AppHeader />

        <router-view v-slot="{ Component }" class="p-10 mb-auto">
            <transition :name="transitionName" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

        <AppFooter />
    </div>
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import router from "@/router"

export default {
    components: {
        AppHeader,
        AppFooter
    },

    computed: {
        transitionName() {
            if (router.currentRoute.value.name === 'HomeView') {
                return 'slide-reverse'
            }

            return 'slide'
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>
