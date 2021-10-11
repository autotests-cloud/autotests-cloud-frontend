<template>
  <div>
    <label for="autotest" class="block text-sm font-medium text-gray-700">
      Бесплатные автотесты для вашего сайта:
    </label>
    <div class="flex mt-1 rounded-md shadow-sm">
      <span class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
        https://
      </span>
      <input type="text" 
      name="autotest" 
      id="autotest" 
      class="flex-1 block w-full min-w-0 px-3 py-2 border-gray-300 rounded-none rounded-r-md focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" 
      placeholder="example.com" />
    </div>
  </div>
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
