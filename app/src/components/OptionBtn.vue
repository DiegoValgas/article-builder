<script setup>
    import Btn from './Btn.vue';
</script>

<template>
    <Btn
        class="
            h-16
            w-22
            flex
            flex-col
            items-center
            justify-center
            text-sm/1
            mb-3
        "
    >
        <slot />
    </Btn>
</template>