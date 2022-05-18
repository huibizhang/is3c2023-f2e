<template>
  <Main pageName="Keynote Speakers">
    <ContentBlock title="Keynote Speakers">
      <div class="flex flex-col space-y-3">
        <SpeakerCard
          v-for="speaker in speakers"
          :key="speaker.position + speaker.name"
          v-bind="speaker"
        />

        <!-- Inviting -->
        <div
          class="inset-0 mx-auto mt-10 flex w-full max-w-2xl items-center justify-center rounded-md bg-gray-100 py-10 text-xl font-bold text-gray-500"
        >
          Inviting
        </div>
      </div>
    </ContentBlock>
  </Main>
</template>

<script>
import Email from '~/components/Email.vue'

export default {
  name: 'Keynote Speakers',
  data() {
    return {
      speakers: [
        // {
        //   name: 'Ming C. Lin',
        //   position: 'Prof.',
        //   img: '/images/keynote-speakers/2020/KeynoteSpeaker01.png',
        //   introductions: [
        //     {
        //       name: 'IEEE Fellow',
        //       description:
        //         'Distinguished University Professor and Elizabeth Stevinson Iribe Chair of Computer Science at the University of Maryland College Park and John R. & Louise S. Parker Distinguished Professor Emerita of Computer Science at the University of North Carolina (UNC), Chapel Hill',
        //     },
        //     {
        //       name: 'Research Interests',
        //       description:
        //         'Computational robotics, haptics, physically-based modeling, virtual reality, sound rendering, and geometric computing.',
        //     },
        //     {
        //       name: 'Major Honors and Awards',
        //       description:
        //         'The NSF Young Faculty Career Award (1995) Honda Research Initiation Award (1997) UNC/IBM Junior Faculty Development Award (1999) UNC Hettleman Award for Scholarly Achievements (2003) Beverly W. Long Distinguished Professorship (2007-2010) UNC WOWS Scholar (2009-2011) IEEE VGTC Virtual Reality Technical Achievement Award (2010)',
        //     },
        //   ],
        //   topic: {
        //     name: 'Reconstructing Reality: From Physical World to Virtual Environments',
        //     link: '/files/keynote-speakers/KeynoteSpeaker01.pdf',
        //   },
        // },
        // {
        //   name: 'Xinghuo Yu',
        //   position: 'Prof.',
        //   img: '/images/keynote-speakers/2020/KeynoteSpeaker02.png',
        //   introductions: [
        //     {
        //       name: 'IEEE Fellow',
        //       description:
        //         'Associate Deputy Vice-Chancellor and Distinguished Professor of Electrical and Electronic Engineering at Royal Melbourne Institute of Technology (RMIT University), Melbourne, Australia',
        //     },
        //     {
        //       name: 'Research Interests',
        //       description:
        //         'Control systems, intelligent and complex systems, energy systems engineering',
        //     },
        //     {
        //       name: 'Major Honors and Awards',
        //       description:
        //         'Honorary Professorship: Shanghai University, Shanghai, China (2018); Huazhong University of Science and Technology, Wuhan, China (2016); Anhui University, Hefei, China (2016); Fudan University, Shanghai, China (2014) M. A. Sargent Medal, joint award from the Electrical College and the Information, Telecommunications and Electronics Engineering College of Engineers Australia (2018) Named an Engineering Executive, Engineers Australia (2018) Named a Highly Cited Researcher (Engineering Category) five years in a row from 2015 to 2019, Clarivate Analytics (formerly Thomson Reuters) Australasian Artificial Intelligence Distinguished Research Contribution Award, Australian Computer Society (2018)',
        //     },
        //   ],
        //   topic: {
        //     name: 'Discontinuous Control Systems: Past, Present and Future',
        //     link: '/files/keynote-speakers/KeynoteSpeaker02.pdf',
        //   },
        // },
      ],
    }
  },
  components: {
    Email,
  },
  head() {
    return {
      title: `Keynote Speakers | ${this.$title}`,
    }
  },
}
</script>
