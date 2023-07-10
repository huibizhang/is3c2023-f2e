<template>
  <Main pageName="Schedule">
    <ContentBlock title="Schedule">
      <div class="flex flex-col items-center justify-center space-y-10 py-5">
        <LinkOutButton v-for="link in links" :key="link.text" v-bind="link" />

        <div class="text-center">
          <span class="font-bold"
            >IS3C2023 conference will be held at<br />
            National Chin-Yi University of Technology.<br
          /></span>
          <br />
          <a href="http://eecs.ncut.edu.tw/ncut/en/index.html">
            <img class="rounded-lg" src="/images/NCUT_HOME.png" alt=""
          /></a>
        </div>
      </div>
    </ContentBlock>
  </Main>
</template>

<script>
import LinkOutButton from '~/components/LinkOutButton.vue'

export default {
  name: 'Schedule',
  data() {
    return {
      links: [
        {
          text: 'Conference Program Schedule',
          link: '/files/schedule/IS3C2023_Conference_Program_Schedule.pdf?20230611',
        },
        {
          text: 'Paper Presentation Schedule',
          link: '/files/schedule/IS3C2023_Paper_Presentation_Schedule.pdf?20230620',
        },
      ],
    }
  },
  components: {
    LinkOutButton,
  },
  head() {
    return {
      title: `Schedule | ${this.$title}`,
    }
  },
}
</script>
