<template>
  <Main pageName="News">
    <ContentBlock title="News">
      <NewsCard v-for="n in news" :key="n.nid" v-bind="n" />
    </ContentBlock>
  </Main>
</template>

<script>
import NewsCard from '~/components/NewsCard.vue'

export default {
  name: 'News',
  data() {
    return {
      news: [],
    }
  },
  mounted() {
    this.getNews()
  },
  methods: {
    async getNews() {
      try {
        const response = await this.$axios.get(
          'http://api.is3c2023.localhost/news'
        )

        if (response.data.status) this.news = response.data.results
      } catch (e) {
        console.log(e)
      }
    },
  },
  components: {
    NewsCard,
  },
}
</script>
