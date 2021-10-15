<template>
  <layout class="page-home">
    <div>
      <label for="autotest" class="block text-sm font-medium text-gray-700">
        Бесплатные автотесты для вашего сайта:
      </label>
      <div class="flex mt-1 rounded-md shadow-sm">
        <span
          class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
        >
          https://
        </span>
        <Input
          type="text"
          name="autotest"
          id="autotest"
          class="flex-1 block w-full min-w-0 px-3 py-2 border-gray-300 rounded-none rounded-r-md focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          placeholder="example.com"
          @change="onInputChange"
        />
      </div>
    </div>

    <div class="space-y-4">
      <div></div>
      <div></div>
    </div>

    <div class="flex justify-center">
      <div>
        <Button @click="onButtonClick">Сгененировать </Button>
      </div>
    </div>

    <div class="space-y-8">
      <div></div>
      <div></div>
    </div>

    <Card />
    <Divider />
    <Card />
    <Divider />
    <Card />

    <Button type="button" class="btn" @click="showModal"
      >Open Modal!</Button
    >

    <Modal v-show="isModalVisible" @close="closeModal" />
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
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import CheckBoxList from "../components/CheckBoxList.vue";
import Modal from "../components/Modal.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
import Log from "../backend/api.js";

export default {
  components: {
    Input,
    Button,
    CheckBoxList,
    Modal,
    Card,
    Divider,
  },
  data() {
    return {
      formData: {
        url: null,
      },
      isModalVisible: false,
    };
  },
  methods: {
    onInputChange(value) {
      this.formData.url = value;
    },
    onButtonClick() {
      console.log("about to submit form with", this.formData);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
body {
  background: #f5f5f5;
}
</style>


 


