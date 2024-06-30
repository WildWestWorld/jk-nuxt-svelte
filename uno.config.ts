import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
    presetAttributify()
  ],
  shortcuts: {
    'border-base': 'border-gray-300  dark:border-gray-600',
    'bg-active': 'bg-gray:10'
  },
})
