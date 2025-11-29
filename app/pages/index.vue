<template>
    <ScrollTop />
    <div class="flex flex-col gap-[10px] min-h-[690px] container">
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
            <!-- v-animateonscroll="{ enterClass: `animate-enter fade-in-10 zoom-in-${i.zoom} animate-duration-1000` }" -->
            <div class="flex flex-col gap-[30px]" v-for="(i, idx) in about" :key="idx">
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

    <section class="py-[70px] bg-light_clay">
        <div>
            <div class="mb-[30px] border-l-8 border-l-clay pl-[20px] py-[10px] rounded-sm">
                <h1 class="text-4xl">Our Contributions</h1>
                <div>By investing in pharmacology education, we're contributing to:</div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-[20px]">
                <div class="rounded-[10px] p-[20px] border hover:border-clay hover:shadow-md cursor-pointer 
            transition-transform duration-200 hover:scale-105" v-for="(i, idx) in features" :key="idx">
                    <div>
                        <h4 class="text-[110%] mb-[10px] text-center">{{ i.header }}</h4>
                        <div class="text-justify">{{ i.desc }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-[100px]">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            <img src="/images/two-young-girls.avif"
                class="rounded-[10px] object-cover object-center w-full sm:h-[500px]" />
            <div class="flex items-center justify-center">
                <div class="sm:w-[90%]">
                    <h1 class="text-4xl">Grant Benefits</h1>
                    <div class="mt-[20px]">
                        Our research grant is designed to support essential academic needs. It covers key
                        research-related
                        expenses and is available to each student once every three years. Awards are granted only to
                        applicants who fully meet the eligibility criteria:
                    </div>
                    <div class="mt-[20px] flex flex-col gap-[5px] ml-[20px]">
                        <div v-for="(i, idx) in requirements" :key="idx">
                            - {{ i }}
                        </div>
                        <div>...</div>
                    </div>
                    <div class="mt-[30px]">
                        <NuxtLink to="/application/procedure">
                            <Button label="View Application procecure"
                                class="!rounded-full p-[15px] !bg-clay !border-none" />
                        </NuxtLink>
                    </div>
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
                        <SocialsWrapper size="30px" gap="20px" :colored="true" />
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
    <NavFooter />
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

const requirements = [
    'Must be a registered full-time PhD student',
    'Must be supervised by a senior member of faculty',
    'Eligible once in 3 years for each student'
]

const about = [
    { image: '04.jpg', zoom: '50', title: 'Our focus', description: 'This initiative is designed to foster innovative research, build capacity in pharmacological sciences, and contribute to the advancement of knowledge in Nigeria. ' },
    { image: '02.jpg', zoom: '75', title: 'Mission & vision', description: ' To provide research grants to deserving PhD students of Pharmacology from the Departments of Pharmacology in Faculties of Medicine, Pharmacy and Verterinary Medicine' },
    { image: '03.jpg', zoom: '50', title: 'How we work', description: 'Our financial support aim to alleviate financial burdens, enabling students to carry out research work in order to achieve academic excellence. ' },
]

const features = [
    { header: 'Advancing Healthcare Through Pharmacology', desc: 'We believe that improved access to essential medicines and treatments begins with empowering those who study them. By supporting PhD scholars, we help drive research that leads to better healthcare outcomes for communities across Nigeria.' },
    { header: 'Fueling Innovation in Pharmaceutical Research', desc: 'Groundbreaking discoveries come from dedicated researchers. Our grants enable PhD students to pursue innovative studies that push the boundaries of pharmacology and contribute to life-changing medical advancements.' },
    { header: 'Building a Diverse and Collaborative Pharmacology Community', desc: 'At Paul and Rina Foundation, we foster a vibrant academic environment where scholars from Medicine, Pharmacy, and Veterinary Medicine work together. We champion diversity, inclusion, and collaboration as key ingredients for scientific progress.' },
    { header: 'Strengthening Research Capacity & Infrastructure', desc: 'We are committed to supporting projects that enhance Nigeria’s research landscape. By empowering scholars, we encourage improved laboratory systems, stronger academic programs, and better drug development processes across the country.' },
    { header: 'Bridging Government, Academia & Industry', desc: 'Sustainable progress requires strong partnerships. Our work supports stronger connections between universities, policymakers, and the pharmaceutical industry—ensuring that research findings can translate into real-world impact.' },
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