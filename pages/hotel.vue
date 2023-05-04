<template>
  <Main pageName="Hotel Information">
    <ContentBlock title="Hotel Information">
      <div class="my-10 flex w-full items-center justify-center space-x-5">
        <a class="block" href="files/飯店資訊-賀緹酒店.pdf" target="_blank">
          <div
            class="rounded-lg border px-5 py-2 text-lg transition-all hover:border-green-600 hover:bg-green-50 active:scale-95"
          >
            Chinese
          </div>
        </a>
        <div class="text-sm">/</div>
        <a
          class="block"
          href="files/hotel-information_HETI-HOTEL.pdf"
          target="_blank"
        >
          <div
            class="rounded-lg border px-5 py-2 text-lg transition-all hover:border-green-600 hover:bg-green-50 active:scale-95"
          >
            English
          </div>
        </a>
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
      title: `Hotel Information | ${this.$title}`,
    }
  },
}
</script>
