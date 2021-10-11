<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
    >
      <header class="modal-header"
        id="modalTitle"
        >
        <slot name="header">
        Модалка!
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
          aria-label="Close modal"
        >
          x
        </button>
      </header>

      <section class="modal-body" id="modalDescription"
      >
        <slot name="body">
          This is the default body!
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
          This is the default footer!
        </slot>
        <custom-button @click="close">
         Закрыть модалку
        </custom-button>
      </footer>
    </div>
  </div>
  </transition>
</template>


<script>
import CustomButton from './Button.vue';
  export default {
    name: 'Modal',
    components: {
      CustomButton,
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(50, 80, 125, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 1px 1px 5px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #fff;
    color: #ff5722;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #fff;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #ff5722;
    background: transparent;
  }

  .btn-orange {
    color: white;
    background: #ff5722;
    border: 1px solid #ff5722;
    border-radius: 5px;
  }
   .modal-fade-enter,
   .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .2s ease;
  }
</style>