<script setup lang="ts">
    import { inject } from 'vue';
    import Btn from '../Btn.vue';
    import Dialog from '../Dialog.vue';
    import Section from '../Section.vue';
    import SectionItems from '../SectionItems.vue';
    import { PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue';

    const props = defineProps({
        parent: Number,
        content: Array,
    });
    const moveColumn = inject('moveColumn');
</script>

<template>
    <div class="w-full flex flex-col md:flex-row space-x-3">
        <div
            v-for="(column, columnIndex) in content"
            class="w-full md:w-1/2 mb-3"
        >
            <Section
                v-for="(section, index) in column"
                :key="`${parent}-${columnIndex}-${index}`"
                :index="[parent, columnIndex, index]"
                :isFirst="index === 0"
                :isLast="index === (column.length - 1)"
                :totalItems="column.length"
                :item="section"
            >
                <SectionItems :section="section" />
            </Section>

            <Dialog :index="[parent, columnIndex]" />

            <Btn
                @click="moveColumn([parent, columnIndex])"
                class="w-full flex justify-center py-1 rounded-none! border-0"
            >
                <PhArrowRight :size="18" v-show="columnIndex == 0" />
                <PhArrowLeft :size="18" v-show="columnIndex == 1" />
            </Btn>
        </div>
    </div>
</template>