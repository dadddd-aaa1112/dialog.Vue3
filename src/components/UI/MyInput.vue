<template>
  <label class="block">
    <span class="text-gray-800"><slot></slot></span>
    <textarea
        :value="modelValue"
        :type="typeInput ? typeInput : 'text'"
        :placeholder="placeholderInput"
        @input="$emit('update:modelValue', $event.target.value)"
        class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-fuchsia-700 focus:ring focus:ring-fuchsia-600 focus:ring-opacity-50

                  "
    />

  </label>
</template>

<script>
export default {
  name: "my-input"
}
</script>
<script setup>
const props = defineProps(['modelValue', 'typeInput', 'placeholderInput'])
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>