<template>
    <a href="" @click.prevent="onButtonClick" >
        <slot/>
    </a>
</template>

<script>
export default {
    methods: {
        onButtonClick() {
            this.$emit('click');
        }
    }
}
</script>