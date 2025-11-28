<template>
    <div class="flex" :style="{ gap: gap || '10px' }">
        <i :style="{ fontSize: size }" class="pi pi-facebook"></i>
        <i :style="{ fontSize: size }" class="pi pi-whatsapp"></i>
        <i :style="{ fontSize: size }" class="pi pi-twitter"></i>
    </div>
</template>

<script setup>
const props = defineProps(['size', 'gap']);
</script>