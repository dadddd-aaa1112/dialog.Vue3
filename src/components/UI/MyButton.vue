<template>
<button class="inline-block px-6 py-2.5 bg-fuchsia-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-fuchsia-600 hover:shadow-lg focus:bg-fuchsia-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-fuchsia-800 active:shadow-lg transition duration-200 ease-in-out">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>

</style>