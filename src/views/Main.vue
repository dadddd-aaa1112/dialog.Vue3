<template>
  <div class="text-center mt-48">
    <h1 class="text-2xl font-bold text-right mr-5"> &#9756; Проект диалог</h1>
    <my-button @click="show">Начать диалог</my-button>

    <my-modal v-model:is_show="dialogVisible">

      <div v-if="messages.length > 0" class="my-5">
        <Dialog :messages="messages">
        </Dialog>
      </div>

      <div v-if="error" >
        <p class="bg-red-100 border border-red-400 text-red-700 my-2 px-3 py-2 rounded-md relative">
          {{error}}</p>
      </div>

      <my-input v-model="message" :placeholderInput="placeholderInput"></my-input>

      <template v-slot:footer>

        <my-button @click="sendMessages">Отправить</my-button>

      </template>

    </my-modal>

  </div>
</template>

<script setup>
import {ref} from 'vue';
import Dialog from "@/views/Dialog";
import MyButton from "@/components/UI/MyButton";

const dialogVisible = ref(false)
const placeholderInput = 'Введите сообщение'

const show = () => {
  dialogVisible.value = true
}

const messages = ref([])
const message = ref()

const error = ref()

const sendMessages = () => {
  if ((message.value).trim() !== '') {
    error.value = ''
    messages.value.push(message.value)
    message.value = ''
  } else {
    error.value = 'Сообщение не может быть пустым'
    message.value = ''
  }




}

</script>

<style scoped>

</style>