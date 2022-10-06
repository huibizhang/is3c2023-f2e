<template>
  <Main isHome="true">
    <ContentBlock title="About">
      The aim of the International Symposium on Computer, Consumer and Control
      (IS3C2023) is to provide a worldwide forum, where the international
      participants can share their research knowledge and ideas on the recent
      and latest research on Computer, Consumer and Control. This conference
      offers an excellent opportunity for scientists, engineers and
      practitioners to present the newest research results, ideas, developments
      and applications. IS3C, held every two years, is hosted by National
      Chin-Yi University of Technology on June 30 - July 3, 2023, Taichung,
      Taiwan. As suggested by the name of the conference, the themes of this
      conference cover computer, multimedia and intelligent, communication
      application, integrated circuits, consumer electronics, renewable energy,
      systems and control as well as digital signal processing. Original
      high-quality papers related to these themes are especially solicited,
      including theories, methodologies and applications in Computing, Consumer
      and Control. All the accepted and presented papers in the IS3C2023 will be
      published in the conference proceedings by IEEE Xplore and will be
      submitted to the EI index and several major citation indexes. Selected
      papers will be invited to submit their revised/enhanced version to
      international journals (Electronics, Multimedia Tools and Applications,
      Applied Sciences, Sensors and Materials, MDPI Processes...). All the
      prospective papers must be submitted online at the conference website.
      Selected papers are invited to some major indexed post-conference
      publications.
    </ContentBlock>
    <ContentBlock title="Academic Sponsors" v-if="sponsors.academic.length">
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        <SponsorCard
          v-for="sp in sponsors.academic"
          :key="sp.sid"
          v-bind="sp"
        />
        <SponsorCard
          v-bind="{
            sid: new Date().getTime(),
            type: 'ads',
            name: 'Inviting',
          }"
        />
      </div>
      <!-- Inviting -->
      <!-- <div
        class="inset-0 mx-auto mt-10 flex w-5/6 max-w-xl items-center justify-center rounded-md bg-gray-100 py-10 text-xl font-bold text-gray-500"
      >
        Inviting
      </div> -->
    </ContentBlock>
    <ContentBlock
      title="Industrial Sponsors"
      v-if="true || sponsors.indutrial.length"
    >
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        <SponsorCard
          v-bind="{
            sid: new Date().getTime(),
            type: 'ads',
            name: 'Inviting',
          }"
        />
      </div>
    </ContentBlock>
  </Main>
</template>

<script>
import SponsorCard from '~/components/SponsorCard.vue'

export default {
  name: 'Home',
  data() {
    return {
      sponsors: {
        academic: [],
        indutrial: [],
      },
      showInvitingCard: true,
    }
  },
  mounted() {
    this.getSponsors('academic', this.sponsors)
    this.getSponsors('indutrial', this.sponsors)
  },
  methods: {
    async getSponsors(sponsorType, container) {
      try {
        const response = await this.$axios.get(
          `${this.$apiBase}/sponsors?type=${sponsorType}`
        )
        if (response.data.status) {
          container[sponsorType] = response.data.results
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
  components: {
    SponsorCard,
  },

  head() {
    return {
      title: this.$title,
    }
  },
}
</script>
