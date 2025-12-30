<script setup>
    import { inject, ref, watch, provide, nextTick, computed } from 'vue';
    import SingleBtn from './SingleBtn.vue';

    const props = defineProps({
        index: Number|Array,
        isFirst: Boolean,
        isLast: Boolean,
        totalItems: Number,
        item: Object,
    });
    const edit = ref(false);
    const textareaRef = ref(null);
    const moveUp = inject('moveUp');
    const moveDown = inject('moveDown');
    const remove = inject('remove');
    const titles = inject('titles');
    const isParent = typeof props.index === 'number';
    const wrapper = {
        'w-full': true,
        'border-zinc-300': true,
        'rounded-xs': true,
        'group-hover:p-2': isParent,
        'group-hover:mb-2': isParent,
        'group-hover:border': isParent,
        'group-hover:shadow-md/20': isParent,
        'group-hover/child:border': !isParent,
        'group-hover/child:shadow-md/20': !isParent,
        'group-hover/child:p-2': !isParent,
        'group-hover/child:mb-2': !isParent,
    };
    const actions = {
        'min-h-4': true,
        'hidden': true,
        'justify-center': true,
        'align-center': true,
        'space-x-2': true,
        'group-hover:flex': isParent,
        'group-hover/child:flex': !isParent,
    };
    const textFieldClasses = computed(() => {
        const title = titles.fromType(props.item.type).current;
        const isTitle = title.type !== null;

        return {
            'w-full': true,
            'h-auto': true,
            'border': true,
            'border-zinc-300': true,
            'rounded-xs': true,
            'p-2': true,
            'font-bold': isTitle,
            [title.class]: isTitle,
        };
    });

    /** Set the edit mode. */
    const editMode = mode => edit.value = mode;

    /** Watch edit mode actions. */
    watch(edit, editing => editing && nextTick(() => textareaRef.value.focus()));

    provide('editMode', editMode);
</script>

<template>
    <div :class="`w-full ${isParent ? 'group' : 'group/child'}`">
        <div :class="wrapper">
            <div v-show="!edit" class="w-full">
                <slot />
            </div>

            <div v-show="edit" class="w-full">
                <label v-if="item.type == 'img'" class="text-md font-medium">
                    Url da imagem
                </label>
                <textarea
                    @keydown.enter="edit = false"
                    @blur="edit = false"
                    v-model="item.content"
                    ref="textareaRef"
                    :class="textFieldClasses"
                ></textarea>
            </div>

            <div :class="actions">
                <SingleBtn
                    class="p-0!"
                    v-show="totalItems > 1 && !isFirst && !edit"
                    @click="edit = false; moveUp(index)"
                >
                    <PhArrowUp :size="20" />
                </SingleBtn>
                <SingleBtn
                    class="p-0!"
                    v-show="totalItems > 1 && !isLast && !edit"
                    @click="edit = false; moveDown(index)"
                >
                    <PhArrowDown :size="20" />
                </SingleBtn>
                <SingleBtn
                    v-if="props.item.type !== 'col'"
                    @click="edit = !edit"
                    class="p-0!"
                >
                    <PhNotePencil v-if="!edit" :size="20" />
                    <PhFloppyDisk v-if="edit" :size="20" />
                </SingleBtn>
                <SingleBtn class="p-0! hover:text-red-500!" @click="remove(index)">
                    <PhTrash :size="20" />
                </SingleBtn>
            </div>
        </div>
    </div>
</template>