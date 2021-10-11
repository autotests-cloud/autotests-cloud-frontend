<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button type="button"
     
    @click.prevent="onButtonClick"
    class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
  >
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    onButtonClick() {
      this.$emit("click");
    },
  },
};
</script>
