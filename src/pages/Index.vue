<template>
  <layout class="page-home">
    <custom-input
      placeholder="https://"
      @change="onInputChange"
    />
    <custom-button @click="onButtonClick">
      Сгененировать
    </custom-button>
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
import CustomButton from '../components/Button.vue';

export default {
  components: { 
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      formData: {
        url: null,
      },
    };
  },
  methods: {
    onInputChange(value) {
      this.formData.url = value;
    },
    onButtonClick() {
      console.log('about to submit form with', this.formData);
    }
  }
};
</script>

<style>
</style>
