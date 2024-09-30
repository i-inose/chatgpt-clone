export const useTranslate = () => {
  const translateToEnglish = async (text: string): Promise<string> => {
    try {
      const response = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text, // 'q' パラメータが翻訳するテキスト
          source: 'ja', // 元の言語
          target: 'en', // 翻訳先の言語
          format: 'text' // テキストフォーマット
        }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data) // デバッグ用
      return data.translatedText
    } catch (error) {
      console.error('Error translating text:', error)
      return 'Translation failed.'
    }
  }

  return {
    translateToEnglish,
  }
}
