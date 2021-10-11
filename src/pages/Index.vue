<template>
  <layout class="page-home">
    <custom-input
      placeholder="https://"
      @change="onInputChange"
    />
    <div class="space-y-4">
  <div></div>
  <div></div>
 
</div>

<div class="flex justify-center">
  <div>
      <custom-button @click="onButtonClick">Сгененировать
    </custom-button>
  </div>
 
</div>


     <div class="space-y-8">
     <div></div>
       <div></div>
     </div>

<Card/>
<Divider />
<Card/>
<Divider />
<Card/>



 <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button>
    
 <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />
    
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
import CheckBoxesTree from '../components/CheckBoxesTree.vue';
import Modal from '../components/Modal.vue';
import Divider from '../components/Divider.vue';
import Card from '../components/Card.vue';
import Log from '../backend/api.js';


export default {
  components: { 
    CustomInput,
    CustomButton,
    CheckBoxesTree,
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
      console.log('about to submit form with', this.formData);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  }
};
</script>

<style>
body {
  background: #f5f5f5;
}

</style>


 