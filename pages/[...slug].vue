<script setup lang="ts">
const { x, y } = useMouse()
const color = useColorMode()

function toggleDark() {
  color.value = color.value === 'dark'
    ? 'light'
    : 'dark'
}
</script>

<template>
  <div class="grid grid-cols-[1fr_2fr] h-full of-hidden max-h-full">
    <article class="border-r border-base p4 prose">
      <ContentDoc></ContentDoc>
    </article>
    <ThePlayground></ThePlayground>
  </div>
</template>
