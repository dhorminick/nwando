<template>
    <div class="bg-white w-full shadow-md border py-[60px] sm:px-[100px] px-[30px]">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-[50px]">
            <div>
                <div class="text-[200%] font-bold">
                    <NavLogo />
                </div>
                <div class="mt-[20px] text-[90%] text-justify">Our mission is to provide research grants to deserving
                    PhD students of
                    Pharmacology
                    from the Departments of Pharmacology in Faculties of Medicine, Pharmacy and Verterinary Medicine.
                </div>
            </div>
            <div class="col-span-2">
                <div class="w-full grid grid-cols-2 sm:grid-cols-3">
                    <div v-for="(item, idx) in links" :key="idx">
                        <div class="text-[110%] font-bold uppercase mb-[20px]">{{ item.title }}</div>
                        <div class="flex flex-col gap-[10px] sidebar_urls">
                            <NuxtLink v-for="(link, idx) in item.links" :key="idx" :to="link.url">
                                {{ link.title }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mt-[100px] mb-[20px]">
        <div class="flex items-center justify-between gap-[10px]">
            <div class="flex gap-[10px]">
                <SocialsWrapper size="20px" gap="20px" />
            </div>
            <div>&copy;2025</div>
        </div>
    </div>
</template>

<script setup>
const links = ref([
    {
        title: 'Quick Links', links: [
            { url: '/', title: 'Home' },
            { url: '/', title: 'About our Foundation' },
            { url: '/', title: 'Our Founders' },
            { url: '/#contact-us', title: 'Contact Us' },
        ]
    },
    {
        title: 'Application', links: [
            { url: '/application/procedure', title: 'Application Criteria' },
            { url: '/application/form', title: 'Application Form' }
        ]
    },
    {
        title: 'Foundation', links: [
            { url: '/', title: 'Mission & Vision' },
            { url: '/', title: 'Get Involved' },
            { url: '/', title: 'Partners' }
        ]
    },
])
const socials = [
    { icon: 'youtube', url: '/', color: '#008000' },
    { icon: 'twitter', url: '/', color: '#008000' },
    { icon: 'facebook', url: '/', color: '#008000' },
    { icon: 'instagram', url: '/', color: '#008000' },
]
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
