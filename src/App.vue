<template>
    <div id="app" class="bg-white lg:bg-primary-background-color min-h-screen transition-colors flex flex-col items-center">
        <AppHeader />

        <router-view class="p-10" />

        <AppFooter />
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
</script>
