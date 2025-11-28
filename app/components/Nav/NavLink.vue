<template>
    <NuxtLink v-if="!data.subs" :to="data.to" class="mb-[1px] hover:text-primary hover:border-b hover:border-b-primary">
        {{ data.title }}
    </NuxtLink>

    <NuxtLink v-else @click="toggle" class="cursor-pointer">{{ data.title }}</NuxtLink>
    <Popover ref="op">
        <div class="flex flex-col w-[250px] gap-[10px]">
            <NuxtLink v-for="(i, idx) in data.subs" :key="idx" :to="i.to"
                class="p-[10px] rounded-[5px] hover:bg-clay hover:text-white">
                {{ i.name }}
            </NuxtLink>
        </div>
    </Popover>
</template>

<script setup>
const prop = defineProps(['data']);
const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}
</script>
