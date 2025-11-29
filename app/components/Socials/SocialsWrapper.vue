<template>
    <div class="flex" :style="{ gap: gap || '10px' }">
        <i :style="{ fontSize: size }" :class="`pi pi-facebook ${!colored ? 'text-[#1877F2]' : ''}`"></i>
        <i :style="{ fontSize: size }" :class="`pi pi-instagram`"></i>
        <i :style="{ fontSize: size }" :class="`pi pi-twitter ${!colored ? 'text-[#1DA1F2]' : ''}`"></i>
        <i :style="{ fontSize: size }" :class="`pi pi-linkedin ${!colored ? 'text-[#0077B5]' : ''}`"></i>
    </div>
</template>

<script setup>
const props = defineProps(['size', 'gap', 'colored']);
</script>