<script>
import Layout from '@layouts/Main'

export default {
  page: {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <Transition appear>
      <div>Loading...</div>
    </Transition>
  </Layout>
</template>
