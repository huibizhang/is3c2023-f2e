<template>
  <Main pageName="Travel Information">
    <ContentBlock title="Travel Information">
      <!-- Planning -->
      <div
        class="inset-0 mx-auto mt-10 flex w-5/6 max-w-xl items-center justify-center rounded-md bg-gray-100 py-10 text-xl font-bold text-gray-500"
      >
        Under planning.
      </div>
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
