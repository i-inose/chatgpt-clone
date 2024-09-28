<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex-grow overflow-y-auto p-4 bg-white">
      <TranslationBubble
        v-for="(msg, index) in translationMessages"
        :key="index"
        :message="msg.text"
        :isUser="msg.isUser"
      />
    </div>
    <TranslationInput @translate="handleTranslation" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '~/components/Header.vue'
import TranslationBubble from '~/components/TranslationBubble.vue'
import TranslationInput from '~/components/TranslationInput.vue'

// 翻訳メッセージのリスト
const translationMessages = ref([])

const handleTranslation = async (message) => {
  // 日本語のメッセージを追加
  translationMessages.value.push({ text: message, isUser: true })

  // APIを使って英語に翻訳する処理 (ここでFirebaseのクラウド関数や外部APIを呼ぶ)
  const translatedText = await translateToEnglish(message)

  // 翻訳結果を追加
  translationMessages.value.push({ text: translatedText, isUser: false })
}

// 仮の翻訳関数（後で実際の翻訳APIに置き換え）
const translateToEnglish = async (text) => {
  return "This is the translated text."
}
</script>

<style scoped>
/* スクロールのカスタマイズ */
.flex-grow {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
