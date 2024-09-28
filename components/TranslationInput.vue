<template>
  <div class="fixed bottom-0 w-full bg-gray-100 p-4 shadow-inner">
    <div class="flex items-center space-x-2">
      <input
        v-model="newMessage"
        type="text"
        class="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Translate from Japanese..."
        @keydown.enter="sendMessage"
      />
      <button @click="sendMessage" class="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-white">
        Translate
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newMessage = ref('')

const emit = defineEmits(['translate'])

const sendMessage = () => {
  if (newMessage.value.trim()) {
    emit('translate', newMessage.value)
    newMessage.value = ''
  }
}
</script>

<style scoped>
</style>
