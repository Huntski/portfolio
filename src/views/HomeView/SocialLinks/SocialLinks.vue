<template>
    <div class="relative z-10 grid grid-cols-1 gap-10 bg-gradient-to-b from-[#7A9CDA] to-[#4F71B0] text-white rounded-lg border-2 border-blue-500 p-8 w-28">
        <a target="_blank" href="https://github.com/huntski" class="hover:opacity-70 flex items-center justify-center">
            <GithubLogo class="w-full" />
        </a>

        <a target="_blank" href="mailto:wieberanzijn@gmail.com" class="hover:opacity-70 flex items-center justify-center">
            <EmailIcon class="w-full" />
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/wiebe-ranzijn-908619183/" class="hover:opacity-70 flex items-center justify-center">
            <LinkedinLogo class="w-full" />
        </a>
    </div>
</template>

<script lang="ts" setup>
import {EmailIcon} from "@/components/@icons"
import {LinkedinLogo, GithubLogo} from "@/components/@logos"
</script>
