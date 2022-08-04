<template>
  <Main pageName="Travel Information">
    <ContentBlock title="Travel Information">
      <!-- Planning -->
      <!-- <div
        class="inset-0 mx-auto mt-10 flex w-5/6 max-w-xl items-center justify-center rounded-md bg-gray-100 py-10 text-xl font-bold text-gray-500"
      >
        Under planning.
      </div> -->

      <div class="mt-10" v-for="place of places" :key="place.name">
        <h3 class="mb-5 text-xl">{{ place.name }}</h3>
        <a :href="place.link" target="_blank">
          <div
            class="inset-0 mx-auto max-w-[600px] overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all hover:scale-105"
          >
            <img :src="place.img" :alt="place.alt" />
            <div class="py-2 text-center text-xs text-gray-500">
              image-source: eng.taiwan.net.tw
            </div>
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
    return {
      places: [
        {
          name: 'Taichung',
          link: 'https://eng.taiwan.net.tw/m1.aspx?sNo=0002112',
          img: '/images/travel-info/taichung.jpg',
          alt: 'link to travel-information of Taichung.',
        },
        {
          name: 'Nantou',
          link: 'https://eng.taiwan.net.tw/m1.aspx?sNo=0002114',
          img: '/images/travel-info/nantou.jpg',
          alt: 'link to travel-information of Nantou.',
        },
      ],
    }
  },
  head() {
    return {
      title: `Travel Information | ${this.$title}`,
    }
  },
}
</script>
