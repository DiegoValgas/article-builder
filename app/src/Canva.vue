<script setup>
    import { provide, ref, watch, inject } from 'vue';
    import { Title } from './components/lib/title';
    import Dialog from './components/Dialog.vue';
    import Section from './components/Section.vue';
    import Columns from './components/items/Columns.vue';
    import SectionItems from './components/SectionItems.vue';
    import SingleBtn from './components/SingleBtn.vue';
    import Page from './components/page/Page.vue';
    import { PhEye, PhFloppyDisk, PhNotePencil } from '@phosphor-icons/vue';

    /** Properties */
    const config = inject('config');
    const sections = ref([]);
    const preview = ref(false);
    const titles = new Title();

    /**
     * Return the item at the given index.
     * @param {Number|Array} index The index of the item.
     * @return {Array} The items list.
     */
    const getList = (index) => typeof index === 'number'
        ? sections.value
        : sections.value[index[0]].content[index[1]];

    /**
     * Return the item at the given index.
     * @param {Number|Array} index The index of the item.
     * @return {Array} The items list.
     */
    const childIndex = (index) => typeof index === 'number' ? index : index[2];

    /**
     * Move the section up in the list.
     * @param {Number|Array} index The index of the section to move.
     */
    function moveUp(index) {
        const item = getList(index);
        const childIdx = childIndex(index);
        const temp = item[childIdx - 1];

        item[childIdx - 1] = item[childIdx];
        item[childIdx] = temp;
    }

    /**
     * Move the section down in the list.
     * @param {Number|Array} index The index of the section to move.
     */
    function moveDown(index) {
        const item = getList(index);
        const childIdx = childIndex(index);
        const temp = item[childIdx + 1];

        item[childIdx + 1] = item[childIdx];
        item[childIdx] = temp;
    }

    /**
     * Incluse a new section into the list.
     *
     * @param {String} type The type of the section.
     * @param {String|Array} content The content of the section.
     * @param {Array} index The index at which to insert the section.
     */
    function add(type, content, index) {
        if (index) {
            sections
                .value[index[0]]
                .content[index[1]]
                .push({type, content});

            return;
        }

        sections.value.push({type, content});
    }

    /**
     * Remove the section from the list.
     * @param {Number|Array} index The index of the section to remove.
     */
    const remove = index => getList(index).splice(childIndex(index), 1);

    /**
     * Returns a string representation of the sections.
     * @return {void}
     */
    function save() {
        if (typeof config.value.saveAction == 'undefined') {
            return;
        }

        config.value.saveAction(JSON.stringify(sections.value));
    }

    /**
     * Column position invertion.
     * @param {Array} index The index of the column to move.
     */
    function moveColumn(index) {
        const moveTo = index[1] == 0 ? 1 : 0;
        const parent = sections.value[index[0]];
        const temp = parent.content[moveTo];

        parent.content[moveTo] = parent.content[index[1]];
        parent.content[index[1]] = temp;
    }

    /** Watch the content config property change. */
    watch(
        () => config.value.content,
        newVal => sections.value = newVal,
        {deep: true}
    );

    /** Provide the functions. */
    provide('moveUp', moveUp);
    provide('moveDown', moveDown);
    provide('add', add);
    provide('remove', remove);
    provide('moveColumn', moveColumn);
    provide('titles', titles);
</script>

<template>
    <div class="canva w-full rounded-xs border border-zinc-300">
        <div class="w-full px-2 bg-zinc-100 flex justify-end items-center">
            <SingleBtn @click="preview = !preview" class="my-2" title="Visualizar">
                <PhEye v-if="!preview" :size="20" />
                <PhNotePencil v-if="preview" :size="20" />
            </SingleBtn>

            <SingleBtn @click="save()" class="my-2" title="Salvar">
                <PhFloppyDisk :size="20" />
            </SingleBtn>
        </div>

        <div v-show="preview" class="w-full p-6">
            <Page :sections="sections" />
        </div>

        <div v-show="!preview" class="w-full">
            <div class="w-full p-3">
                <Section
                    v-for="(section, index) in sections"
                    :key="index"
                    :index="index"
                    :isFirst="index === 0"
                    :isLast="index === (sections.length - 1)"
                    :totalItems="sections.length"
                    :item="section"
                >
                    <SectionItems :section="section" />

                    <Columns
                        v-if="section.type == 'col'"
                        :parent="index"
                        :content="section.content"
                    />
                </Section>
            </div>

            <Dialog />
        </div>
    </div>
</template>
