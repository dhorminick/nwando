<template>
    <ScrollTop />
    <div class="flex flex-col gap-[10px] min-h-[680px] container">
        <NavHeader :tranparent="true" />
        <section class="flex-1 flex items-center py-[70px]">
            <div class="sm:w-[55%]  w-full">
                <h1 class="text-7xl tracking-wider text-white">Empowering Future Pharmacology Leaders </h1>
                <div class="text-white mt-[20px]">Supporting the next generation of pharmacology professionals!</div>
                <div class="mt-[40px]">
                    <NuxtLink to="/application/procedure">
                        <Button label="Apply For Grant" class="!rounded-full p-[15px] !bg-clay !border-none" />
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
    <section class="...bg-light_gray py-[70px]">
        <h1 class="text-4xl mb-[30px] border-l-8 border-l-clay pl-[20px] py-[10px] rounded-sm">About The Foundation</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
            <div v-animateonscroll="{ enterClass: `animate-enter fade-in-10 zoom-in-${i.zoom} animate-duration-1000` }"
                class="flex flex-col gap-[30px]" v-for="(i, idx) in about" :key="idx">
                <img :src="`/images/about/${i.image}`"
                    class="w-full h-[250px] object-cover object-center rounded-[10px]" />
                <div class="flex flex-col gap-[20px]">
                    <h3 class="text-2xl">{{ i.title }}</h3>
                    <div>{{ i.description }}</div>
                    <NuxtLink class="mb-[1px] border-b border-b-clay text-clay w-max">Learn More</NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <section id="contact-us" class="contact_container text-white py-[100px]">
        <h2 class="text-4xl mb-[30px] border-l-8 border-l-white pl-[20px] py-[10px] rounded-sm">Contact Us:</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <div>
                <div class="mb-[20px]">Whether you’re an investor or simply have a question about the
                    application, we’d
                    love to hear from
                    you — send us a message.</div>
                <div class="flex flex-col gap-[20px]">
                    <div class="flex-gap-10">
                        <strong class="min-w-[70px]">Email:</strong> <span>{{ socials.contact_email }}</span>
                    </div>
                    <div class="flex-gap-10">
                        <strong class="min-w-[70px]">Phone:</strong> <span>{{ socials.contact_phone }}</span>
                    </div>
                    <div class="flex-gap-10">
                        <strong class="min-w-[70px]">Address:</strong>
                        <div>
                            Paul and Rina Okonkwo Educational Foundation Steering Committee,<br />
                            C/ o Department of Pharmacology and Therapeutics, <br />
                            College of medicine, <br />
                            University of Nigeria, Enugu-Campus,<br />
                            Enugu, Nigeria
                        </div>
                    </div>
                    <div class="mt-[20px]">
                        <div class="mb-[10px]">Connect with us:</div>
                        <SocialsWrapper size="30px" gap="20px" />
                    </div>
                </div>
            </div>
            <form class="flex flex-col gap-[20px]">
                <FloatLabel variant="in">
                    <InputText fluid v-model="contact.name" />
                    <label>Name:</label>
                </FloatLabel>

                <FloatLabel variant="in">
                    <InputText fluid type="email" v-model="contact.email" />
                    <label>Email Address:</label>
                </FloatLabel>

                <FloatLabel variant="in">
                    <Textarea id="in_label" v-model="contact.message" rows="5" fluid style="resize: none" />
                    <label for="in_label">Message:</label>
                </FloatLabel>

                <Button label="Submit Message" type="submit"
                    class="!rounded-full p-[15px] !bg-white !text-clay !border-clay !w-full" />
            </form>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: false
})

import { socials } from '~/utils/constants';
const contact = ref({
    name: '',
    message: '',
    email: ''
})

const about = [
    { image: '04.jpg', zoom: '50', title: 'Our focus', description: 'This initiative is designed to foster innovative research, build capacity in pharmacological sciences, and contribute to the advancement of knowledge in Nigeria. ' },
    { image: '02.jpg', zoom: '75', title: 'Mission & vision', description: ' To provide research grants to deserving PhD students of Pharmacology from the Departments of Pharmacology in Faculties of Medicine, Pharmacy and Verterinary Medicine' },
    { image: '03.jpg', zoom: '50', title: 'How we work', description: 'Our financial support aim to alleviate financial burdens, enabling students to carry out research work in order to achieve academic excellence. ' },
]
</script>

<style scoped>
:root {
    --p-primary-color: theme("colors.clay") !important;
}

.flex-gap-10 {
    display: flex;
    gap: 10px;
}

.container {
    position: relative;
    background: url('/images/pharmacology-phd.jpg') no-repeat top/cover;
    overflow: hidden;
    /* ensures overlay stays inside */
}

.container::before {
    content: "";
    position: absolute;
    inset: 0;
    /* covers full container */
    background: rgba(0, 0, 0, 0.7);
    /* dark overlay with 50% opacity */
    z-index: 0;
    /* sits above background but below content */
}

.container>* {
    position: relative;
    z-index: 1;
    /* ensures text/content stays above overlay */
}

.contact_container {
    position: relative;
    background: url('/images/landing.png') no-repeat top/cover;
    overflow: hidden;
}

.contact_container::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(182, 106, 80, 0.7);
    z-index: 0;
}

.contact_container>* {
    position: relative;
    z-index: 1;
}
</style>