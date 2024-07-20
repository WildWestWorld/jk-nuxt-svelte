

<template>
  <nav px6 py4 text-lg border-b border-base flex="~ gap-2 items-center">

    <NuxtLink to="/" flex="~ gap-2 items-center" title="Nuxt Playground">
      <NuxtLogo class="h-1.3em mt--1.8"></NuxtLogo>
      <span text-xl>Playground</span>
    </NuxtLink>

    <div flex-auto></div>

    <NuxtLink p2 rounded hover="bg-active" href="https://github.com/WildWestWorld/jk-nuxt-svelte" target="_blank">
      <div i-carbon-logo-github text-2xl></div>
    </NuxtLink>


  </nav>
</template>
