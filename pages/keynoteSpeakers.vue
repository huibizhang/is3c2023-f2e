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
        <!-- <div
          class="inset-0 mx-auto mt-10 flex w-5/6 max-w-xl items-center justify-center rounded-md bg-gray-100 py-10 text-xl font-bold text-gray-500"
        >
          Inviting
        </div> -->
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
        {
          name: 'Wen-Huang Cheng',
          position: 'Ph.D',
          positionAtFront: false,
          img: '/images/keynote-speakers/2023/KeynoteSpeaker02.jpg',
          introductions: [
            {
              name: 'About the Speaker',
              isHTML: false,
              description: `Wen-Huang Cheng is Professor with the Department of Computer Science and Information Engineering, National Taiwan University (NTU). His current research interests include artificial intelligence, multimedia, computer vision, machine learning, digital transformation, and financial technology. He has actively participated in international events and played important leading roles in prestigious journals and conferences and professional organizations, including Editor-in-Chief for IEEE CTSoc News on Consumer Technology, Senior Editor for IEEE Consumer Electronics Magazine, Associate Editor for IEEE Transactions on Multimedia (T-MM), General Chair for ACM MMAsia (2023), IEEE ICCE-TW (2023, 2022), IEEE ICME (2022) and ACM ICMR (2021), Chair for IEEE Multimedia Systems and Applications (MSA) technical committee, governing board member for IAPR. He has received numerous research and service awards, including the Best Paper Award of 2021 IEEE ICME and the Outstanding Associate Editor Award of IEEE T-MM (2021 and 2020, twice). He is IEEE Distinguished Lecturer, ACM Distinguished Member, and IET Fellow.`,
            },
            {
              name: 'Research Interests',
              isHTML: false,
              description:
                'Artificial Intelligence, Multimedia, Computer Vision, Machine Learning, Digital Transformation, Financial Technology',
            },
            {
              name: 'Major Honors and Awards',
              isHTML: true,
              description: `<li>2021 Future Tech Award, MOST (Ministry of Science and Technology of Taiwan)</li>
                            <li>2021 Taiwan’s National Innovation Award</li>
                            <li>2021 & 2020 Outstanding Associate Editor Award of IEEE Transactions on Multimedia</li>
                            <li>2021 Best Associate Editor Award of Multimedia Systems</li>
                            <li>Best Paper Award of 2021 IEEE International Conference on Multimedia & Expo (ICME)</li>
                            <li>Third Place Winner (out of 56), IEEE ICCV 2021 - Chalearn 3D High-Fidelity Mask Face Presentation Attack Detection Challenge</li>
                            <li>IEEE Distinguished Lecturer (2021)</li>
                            <li>ACM Distinguished Member (2020)</li>
                            <li>Fellow of Institute of Engineering and Technology (IET) (2020)</li>
                            <li>First Place Winner, IEEE CVPR 2020 - Look Into Person (LIP) Challenge (Track: Image-based Multi-pose Virtual Try-on Challenge)</li>
                            <li>Third Place Winner (out of 272), ECCV 2020 - GigaVision Challenge</li>
                            <li>2018 Collaborative Research Award of Microsoft Research Asia (MSRA)
                            `,
            },
          ],
          topic: {
            name: 'Opportunities and Challenges of Large-Scale Vision Foundation Models',
            link: '/files/keynote-speakers/2023/KeynoteSpeaker02.pdf',
          },
        },
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
