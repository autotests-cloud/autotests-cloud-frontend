<template>
  <div
    class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
    <div class="px-4 py-5 bg-gray-100 sm:px-6">
      <slot>Хедер</slot></div>
    <div class="px-4 py-5 sm:p-6">
      <div class="flex flex-col">
        <div>
          <CheckBoxList />
        </div>
      </div>
    </div>
    <div class="px-4 py-4 bg-gray-100 sm:px-6">
      <slot>Футер</slot>
      </div>
  </div>
</template>

<script>
import CheckBoxList from "./CheckBoxList.vue";
export default {
  name: "Card",
  components: {
    CheckBoxList,
  },
};
</script>

