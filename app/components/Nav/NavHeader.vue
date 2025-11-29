<template>
    <Drawer v-model:visible="visible">
        <div class="flex flex-col gap-[10px] mt-[20px] sidebar_urls">
            <!-- <NuxtLink v-for="item in Restaurantlinks" :key="item.id" :to="item.to" @click="visible = false">
                {{ item.title }}
            </NuxtLink> -->
            <NuxtLink to="/" @click="visible = false">Home</NuxtLink>
            <NuxtLink to="/#contact-us" @click="visible = false">Contact Us</NuxtLink>
            <NuxtLink to="/" @click="visible = false">About our Foundation</NuxtLink>
            <NuxtLink to="/" @click="visible = false">Grant Benefits</NuxtLink>
            <NuxtLink to="/application/procedure" @click="visible = false">Application Procedure</NuxtLink>
        </div>
        <template #footer>
            <div class="flex justify-between gap-[20px]">
                <NuxtLink to="/application/procedure">
                    <Button label="Apply" class="!bg-clay !border-none w-full" />
                </NuxtLink>
                <NuxtLink to="/#contact-us">
                    <Button label="Contact Us" class="!border-clay !bg-none !text-clay w-full" />
                </NuxtLink>
            </div>
        </template>
    </Drawer>
    <div class="py-[5px] sm:px-[100px] px-[30px] bg-white">
        <div class="flex justify-end items-center gap-[20px]">
            <div class="sm:block hidden">{{ socials.contact_email }}</div>
            <span class="sm:block hidden">|</span>
            <SocialsWrapper gap="20px" />
        </div>
    </div>
    <div :class="tranparent ? 'bg-transparent' : 'bg-white'"
        class="shadow-lg w-full flex justify-between py-[10px] sm:px-[100px] px-[30px] items-center">
        <div class="flex gap-[20px] items-center">
            <NuxtLink to="/" class="text-[200%] font-bold">
                <NavLogo :tranparent="tranparent" />
            </NuxtLink>
        </div>
        <div class="gap-[20px] items-center sm:flex hidden" :class="tranparent ? 'text-white' : ''">
            <NavLink v-for="(i, idx) in links" :key="idx" :data="i" />
        </div>
        <div class="sm:hidden block">
            <i class="pi pi-bars !text-[150%] text-white" @click="visible = true"></i>
        </div>
    </div>
</template>

<script setup>
import { socials } from '~/utils/constants';
const props = defineProps(['tranparent'])
const visible = ref(false)
const links = ref([
    { id: 2, title: 'About Our Foundation', to: '/' },
    {
        id: 2, title: 'Our Founders', to: '#', subs: [
            { name: 'Prof. Mr. Paul Okonkwo', to: '/' },
            { name: 'Prof. Mrs. Rina Okonkwo', to: '/' }
        ]
    },
    { id: 3, title: 'Apply', to: '/application-procedure' },
    { id: 4, title: 'Contact Us', to: '/#contact-us' }
])
</script>

<style scoped>
.sidebar_urls a {
    margin-bottom: 1px;
    width: max-content;
}

.sidebar_urls a:hover {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
}
</style>