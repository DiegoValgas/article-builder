<script setup>
    import { inject } from 'vue';
    import Image from './items/Image.vue';
    import Paragraph from './items/Paragraph.vue';
    import Title from './items/Title.vue';

    const props = defineProps({
        section: Object,
    });
    const titles = inject('titles');
    const editMode = inject('editMode');
</script>

<template>
    <Title
        v-if="titles.list.has(section.type)"
        @click="editMode(true)"
        :size="titles.type[section.type]"
    >
        {{ section.content }}
    </Title>

    <Paragraph
        v-if="section.type == 'p'"
        @click="editMode(true)"
    >
        {{ section.content }}
    </Paragraph>

    <Image v-if="section.type == 'img'" :src="section.content" />
</template>