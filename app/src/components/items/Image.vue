<script setup>
    defineProps({src: String, alt: String});
</script>

<template>
    <div class="w-full mb-3">
        <img :src="src" :alt="alt">
    </div>
</template>