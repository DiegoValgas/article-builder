<script setup>
    import { inject } from 'vue';
    import Image from '../items/Image.vue';
    import Paragraph from '../items/Paragraph.vue';
    import Title from '../items/Title.vue';

    const props = defineProps({section: Object});
    const titles = inject('titles');
</script>

<template>
    <div :class="`w-full ${section.type}-section`">
        <Title
            v-if="titles.list.has(section.type)"
            :size="titles.type[section.type]"
        >
            {{ section.content }}
        </Title>

        <Paragraph v-if="section.type == 'p'">
            {{ section.content }}
        </Paragraph>

        <Image v-if="section.type == 'img'" :src="section.content" />

        <slot />
    </div>
</template>