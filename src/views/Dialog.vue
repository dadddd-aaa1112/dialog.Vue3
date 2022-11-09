<template>

  <div class="flex flex-col items-end">
        <span class="font-bold text-gray-700">мое сообщение:
        <br>
        </span>
    <span class="px-2 py-2  bg-white border border-2 border-lime-600 rounded-md" v-for="text in messages">
       {{ text }}
      </span>
  </div>

</template>

<script setup>
const props = defineProps({
  messages: {
    type: Array,
    required: true,
  }
})
</script>

<style scoped>

</style>