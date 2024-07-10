<script setup lang="ts" >
const iframe = ref<HTMLIFrameElement>()



async function startDevServer() {
  const wc = await useWebContainer();
  console.log('mounting')

  await wc.mount({
    'package.json': {
      file: {
        contents: JSON.stringify({
          private: true,
          scripts:{
            dev:'nuxt dev'
          },
          dependencies: {
            nuxt: 'latest'
          }
        }, null, 2)
      }
    }
  })

  console.log('installing')
  const installProcess = await wc.spawn('npm', ['install']);

  const installExitCode = await installProcess.exit;

  if (installExitCode !== 0) {
    throw new Error('Unable to run npm install');
  }

  console.log('run')
  // `npm run dev`
  await wc.spawn('npm', ['run', 'dev']);

  wc.on('server-ready', (port, url) => (iframe.value!.src = url));

}

onMounted(startDevServer)

</script>

<template>
  <div>
    <iframe ref="iframe"></iframe>
  </div>
</template>