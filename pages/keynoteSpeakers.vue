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
          class="inset-0 mx-auto mt-10 flex w-5/6 max-w-xl items-center justify-center rounded-md bg-gray-100 py-10 text-xl font-bold text-gray-500"
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
  name: 'KeynoteSpeakers',
  data() {
    return {
      speakers: [
        {
          name: 'Masahide Nakamura',
          position: 'Ph.D',
          positionAtFront: false,
          img: '/images/keynote-speakers/2023/KeynoteSpeaker01.png',
          introductions: [
            {
              name: 'About the Speaker',
              isHTML: false,
              description: `Masahide Nakamura received the B.E., M.E., and Ph.D. degrees in Information and Computer Sciences from Osaka University, Japan, in 1994, 1996, 1999, respectively. From 1999 to 2000, he has been a post-doctoral fellow in SITE at University of Ottawa, Canada. He joined Cybermedia Center at Osaka University from 2000 to 2002.  From 2002 to 2007, he worked for the Graduate School of Information Science at Nara Institute of Science and Technology, Japan. From 2007 to 2022, he worked for the Graduate School of System Informatics at Kobe University. He is currently a full professor in the Center of Mathematical and Data Science Center at Kobe University. He is a member of the IEEE, ACM, IEICE and IPSJ.`,
            },
            {
              name: 'Research Interests',
              isHTML: false,
              description:
                'service computing, cloud computing, smart home, smart city, gerontechnology, data-driven approach, software engineering',
            },
            {
              name: 'Major Honors and Awards',
              isHTML: true,
              description: `<li>SNPD2022-Summer Best Paper Award (June, 2022)</li>
                            <li>Kobe University President's Award (October, 2021)</li>
                            <li>IEICE Human Communication Award (December, 2019)</li>
                            <li>ICSPIS2018 Best Paper Award (November, 2018)</li>
                            <li>BCD2018 Best Paper Award (July 2018)</li>
                            <li>and more…</li>`,
            },
          ],
          topic: {
            name: 'Exploiting IoT and Virtual Agent for Monitoring Living and Mind of Elderly People at Home',
            link: '/files/keynote-speakers/2023/KeynoteSpeaker01.pdf',
          },
        },
        // {
        //   name: 'Xinghuo Yu',
        //   position: 'Prof.',
        //   positionAtFront: false,
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
