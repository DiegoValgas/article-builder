<script setup>
    import { provide, ref, watch, inject } from 'vue';
    import { Title } from './components/lib/title';
    import Page from './components/page/Page.vue';

    /** Properties */
    const config = inject('config');
    const sections = ref([]);
    const titles = new Title();

    /** Watch the content config property change. */
    watch(
        () => config.value.content,
        newVal => sections.value = newVal,
        {deep: true}
    );

    /** Provide the functions. */
    provide('titles', titles);
</script>

<template>
    <Page :sections="sections" />
</template>
