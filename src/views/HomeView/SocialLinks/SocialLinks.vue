<template>
    <div class="mt-20 relative z-10 flex items-start lg:grid-cols-1 lg:w-28 lg:grid lg:grid-cols-1
    bg-gradient-to-b from-[#7A9CDA] to-[#4F71B0] text-white rounded-lg border-2 border-blue-500">
        <SocialLinkItem href="https://github.com/huntski">
            <GithubLogo />
        </SocialLinkItem>

        <SocialLinkItem href="mailto:wieberanzijn@gmail.com">
            <EmailIcon />
        </SocialLinkItem>

        <SocialLinkItem href="https://www.linkedin.com/in/wiebe-ranzijn-908619183/">
            <LinkedinLogo />
        </SocialLinkItem>
    </div>
</template>

<script lang="ts" setup>
import {EmailIcon} from "@/components/@icons"
import {LinkedinLogo, GithubLogo} from "@/components/@logos"
import SocialLinkItem from "@/views/HomeView/SocialLinks/SocialLinkItem.vue"
</script>
