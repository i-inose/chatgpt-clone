<template>
	<div :class="isUser ? 'text-right' : 'text-left'">
		<div :class="bubbleClass" class="inline-block px-4 py-2 rounded-lg max-w-xl">
			<p class="text-base">{{ message }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
  message: String,
  isUser: Boolean,
})

const bubbleClass = computed(() => {
  return props.isUser
    ? 'bg-gray-200 text-black rounded-xl'   // ユーザーの日本語入力
    : 'bg-gray-200 text-black rounded-xl'   // 翻訳された英語結果
})
</script>
