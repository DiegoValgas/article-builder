<script setup>
    defineProps({size: String});
</script>

<template>
    <h6 :class="['mb-3 min-h-2 font-bold', size]"><slot /></h6>
</template>