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
    onInputChange(value) {
      this.$emit("change", value);
    },
  },
};
</script>
