<script setup>
    import Columns from './Columns.vue';
    import Section from './Section.vue';

    const props = defineProps({sections: Array});
</script>

<template>
    <Section v-for="section in sections" :section="section">
        <Columns
            v-if="section.type == 'col'"
            :content="section.content"
        />
    </Section>
</template>