<template>
  <div>
    <ul>
      <li>
        <CheckBox
          class="w-4 h-4 text-yellow-500 border-yellow-300 rounded  focus:ring-yellow-500"
        />Сгенерировать репозиторий в GitHub
      </li>
      <li>
        <CheckBox
          class="w-4 h-4 ml-4 text-yellow-500 border-yellow-300 rounded  focus:ring-yellow-500"
        />Сгенерировать 2 автотеста
      </li>
    </ul>
  </div>
</template>

<script>
import CheckBox from "./CheckBox.vue";

export default {
  name: "CheckBoxesTree",
  components: {
    CheckBox,
  },
};
</script>
<style>
</style>
