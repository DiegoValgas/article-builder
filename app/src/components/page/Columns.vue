<script setup lang="ts">
    import Section from './Section.vue';

    const props = defineProps({content: Array});
</script>

<template>
    <div class="w-full flex flex-col md:flex-row space-x-3">
        <div
            v-for="column in content"
            class="w-full md:w-1/2 mb-3"
        >
            <Section v-for="section in column" :section="section" />
        </div>
    </div>
</template>