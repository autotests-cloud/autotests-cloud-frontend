<template>
  <input
    id="checkbox"
    type="checkbox"
    name="checkbox"
    @click="onCheckBoxChange"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onCheckBoxChange(event) {
      this.$nextTick(() => {
        // this.$emit("change", event.target.value);
        console.log(event.target.value);
      });
    },
  },
};
</script>