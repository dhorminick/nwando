<template>
    <div class="py-[5px] sm:px-[100px] px-[30px] bg-white">
        <div class="flex justify-end items-center gap-[20px]">
            <div>contact@paulfoundation.com</div> |
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
    </div>
</template>

<script setup>
const props = defineProps(['tranparent'])
const links = ref([
    { id: 2, title: 'About Our Foundation', to: '/' },
    {
        id: 2, title: 'Our Founders', to: '#', subs: [
            { name: 'Mr. Paul Okonkwo', to: '/' },
            { name: 'Mrs. Rina Okonkwo', to: '/' }
        ]
    },
    { id: 3, title: 'Apply', to: '/' },
    { id: 4, title: 'Contact Us', to: '/' }
])
</script>
