<template>
  <layout class="page-home">
    <custom-input
      placeholder="https://"
      @change="onInputChange"
    />
    <a href="" @click.prevent="submitForm" >Сгенерировать</a>
  </layout>
</template>

<page-query>
query {
  metadata {
    siteName,
  }
}
</page-query>

<script>
import CustomInput from '../components/Input.vue';

export default {
  data() {
    return {
      formData: {
        url: null,
      },
    };
  },
  components: { CustomInput, },
  methods: {
    onInputChange(value) {
      this.formData.url = value;
    }
  }
};
</script>

<style>
</style>
