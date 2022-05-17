<template>
  <input :placeholder="placeholder" @change="onInputChange" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInputChange(event) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>
