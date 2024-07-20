import { defineConfig, presetUno, presetIcons, presetAttributify, transformerDirectives, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        mono: 'DM mono'
      }
    })
  ],
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'bg-active': 'bg-gray:10',
    'bg-base': 'bg-white  dark:bg-[#020420]'
  },
  transformers: [
    transformerDirectives(),
  ],
})
