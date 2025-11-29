<template>
    <div class="flex gap-[10px] items-center">
        <i class="pi pi-globe !text-[200%] text-clay"></i>
        <div class="grid">
            <span class="text-clay text-[130%] font-bold">Paul'Rina</span>
            <span class="text-sm uppercase" :class="tranparent ? 'text-white' : ''">
                Foundation
            </span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['tranparent'])
</script>