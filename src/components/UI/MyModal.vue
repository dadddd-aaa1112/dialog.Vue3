<template>
  <div class="relative z-10" v-if="is_show" @click.stop="$emit('update:is_show', false)">
    <div  class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex mix-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <div
            class="relative transform overflow-hidden rounded-lg bg-lime-400  text-right shadow-xl transition-all w-auto">

          <div @click.stop class="bg-lime-400 px-5 py-2">

            <span class="text-right font-bold bg-white rounded-md px-2 py-1 -mr-4 -mt-4 " @click.stop="$emit('update:is_show', false)">
              X
            </span>

            <slot></slot>

          </div>
          <div @click.stop class="bg-lime-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-modal"
}
</script>
<script setup>
const emit = defineEmits(['update:is_show'])
const props = defineProps({
  is_show: {
    type: Boolean,
    default: false
  }
})

</script>
<style scoped>

</style>