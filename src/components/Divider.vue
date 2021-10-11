<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="px-2 text-gray-500 bg-white">
        <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path fill="#6B7280" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>

   export default {
    name: 'Divider',
    components: {
      
    },
  };

</script>

