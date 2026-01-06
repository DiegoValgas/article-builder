<script setup>
    import { inject, provide, ref } from 'vue';
    import Btn from './Btn.vue';
    import OptionBtn from './OptionBtn.vue';
    import Title from './items/Title.vue';
    import {
        PhArrowUDownLeft, PhColumns, PhImageSquare, PhMinus, PhPlus,
        PhTextHOne, PhTextT
    } from '@phosphor-icons/vue';

    const props = defineProps({index: Number|Array});
    const opened = ref(false);
    const titles = ref(false);
    const add = inject('add');
    const titlesLib = inject('titles');
    const imgPlaceholder = 'https://placehold.co/990x600?text=Imagem+de+Exemplo';

    /** Show the titles section. */
    const showTitles = () => titles.value = true;

    /** Hide the titles section. */
    const hideTitles = () => titles.value = false;

    /** Toggle the dialog open state. */
    function toggleDialog() {
        opened.value = !opened.value;
        hideTitles();
    };

    /**
     * Provide the functions.
     */
    provide('showTitles', showTitles);
    provide('hideTitles', hideTitles);
    provide('toggleDialog', toggleDialog);
</script>

<template>
    <div
        class="w-full p-3"
        v-show="opened"
    >
        <div v-show="!titles" class="flex flex-wrap justify-center space-x-3 -mb-3">
            <OptionBtn @click="showTitles">
                <PhTextHOne :size="20" />
                <span>Títulos</span>
            </OptionBtn>
            <OptionBtn @click="add('p', 'Parágrafo', index); toggleDialog()">
                <PhTextT :size="20" />
                <span>Parágrafo</span>
            </OptionBtn>
            <OptionBtn
                v-if="props.index === undefined"
                @click="add('col', [[], []]); toggleDialog()"
            >
                <PhColumns :size="20" />
                <span>Colunas</span>
            </OptionBtn>
            <OptionBtn @click="add('img', imgPlaceholder, index); toggleDialog()">
                <PhImageSquare :size="20" />
                <span>Imagem</span>
            </OptionBtn>
        </div>

        <div v-show="titles" class="-mb-3">
            <OptionBtn
                class="w-full mb-3! h-auto"
                v-for="(section, index) in titlesLib.options"
                :key="index"
                @click="add(section.type, section.content, props.index); toggleDialog()"
            >
                <Title
                    class="mb-0!"
                    :size="titlesLib.type[section.type]"
                >
                    {{ section.content }}
                </Title>
            </OptionBtn>
            <OptionBtn class="w-full h-8! mb-3!" @click="hideTitles()">
                <PhArrowUDownLeft :size="20" />
            </OptionBtn>
        </div>
    </div>

    <Btn
        class="w-full flex justify-center py-1 rounded-none! border-0"
        @click="toggleDialog()"
    >
        <PhPlus :size="18" v-show="!opened" />
        <PhMinus :size="18" v-show="opened" />
    </Btn>
</template>