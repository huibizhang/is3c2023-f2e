<template>
  <Main pageName="Travel Information">
    <ContentBlock title="Travel Information">
      <div>It's nothing here.</div>
    </ContentBlock>
  </Main>
</template>

<script>
export default {
  name: 'Travel',
  data() {
    return {}
  },
  head() {
    return {
      title: `Travel Information | ${this.$title}`,
    }
  },
}
</script>
