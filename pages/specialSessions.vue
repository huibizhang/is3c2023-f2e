<template>
  <Main pageName="Special Sessions">
    <ContentBlock title="About the Proposal Submission of Special Session">
      Dear All Special Session Organizers,<br />
      IS3C2023 welcomes prospective authors to organize a special session in our
      conference. Organizer is responsible for inviting at least six papers. The
      proposal must be submitted to the committee (
      <a class="link" href="mailto:is3c2020@ncut.edu.tw"
        >is3c2020@ncut.edu.tw</a
      >
      /
      <a class="link" href="mailto:is3c2020@gm.ncut.edu.tw"
        >is3c2020@gm.ncut.edu.tw</a
      >
      ) by <span class="text-[red]">August 31, 2020</span>. Once the proposal is
      approved, the organizer will be invited as the session chair, and he/she
      should take all responsibility to carry out review process. The submission
      procedure is the same as the regular sessions via the submission system
      website.<br />
    </ContentBlock>
    <ContentBlock
      title="Template of Special Session Proposals for the IS3C2023"
      level="2"
    >
      <a
        class="link"
        href="/files/Special%20Session%20Proposals%20for%20the%20IS3C2020%20(Template)%20109.5.12.doc"
        >Click here to download the MS Word Template file.</a
      >
    </ContentBlock>
    <hr />
    <ContentBlock
      title="List of IS3C2023 Accepted Invited Sessions (Continue to be updated)"
      level="2"
    >
      <div class="flex flex-col items-center space-y-3">
        <SpecialSessionCard
          v-for="(ss, index) in specialSessions"
          :key="ss.name"
          v-bind="{ index, ...ss }"
        />
      </div>
    </ContentBlock>
  </Main>
</template>

<script>
import SpecialSessionCard from '~/components/SpecialSessionCard.vue'

export default {
  name: 'SpecialSessions',
  data() {
    return {
      specialSessions: [
        {
          // IS-01
          name: 'Soft Computing and its Applications',
          organizer: [
            'Prof. Sheng-Chih Yang',
            'Prof. Cheng-Jian Lin',
            'Prof. Chi-Yuan Lin',
          ],
          contact: ['scyang@ncut.edu.tw'],
          note: '',
        },
        {
          // IS-02
          name: 'Brain Intelligence Control, Artificial Intelligence and Electrical Engineering',
          organizer: ['Prof. Mei Wang'],
          contact: ['wangm@xust.edu.cn'],
          note: '',
        },
        {
          // IS-03
          name: 'Advanced Computer Vision Technologies',
          organizer: [
            'Prof. Guo-Shiang Lin',
            'Prof. Chih-Chung Hsu',
            'Prof. Sheng-Chih Yang',
          ],
          contact: [
            'gslin@ncut.edu.tw',
            'cchsu@mail.npust.edu.tw',
            'scyang@ncut.edu.tw',
          ],
          note: '',
        },
        {
          // IS-04
          name: 'Power Quality and Energy System',
          organizer: ['Prof. Cheng-I Chen', 'Prof. Yeong-Chin Chen'],
          contact: ['cichen@ee.ncu.edu.tw', 'ycchenster@gmail.com'],
          note: '',
        },
        {
          // IS-05
          name: 'IoT Sensing and Artificial Intelligence',
          organizer: [
            'Prof. Shun-Yuan Wang',
            'Prof. Sung-Jung Hsiao',
            'Prof. Jen-Hsiang Chou',
          ],
          contact: ['topdike@gmail.com'],
          note: '',
        },
        {
          // IS-06
          name: 'Informatic System Design and Implementation',
          organizer: [
            'Prof. Chuin-Mu Wang',
            'Prof. Ruey-Maw Chen',
            'Prof. Chen-Kun Tsung',
          ],
          contact: ['ckt@ncut.edu.tw'],
          note: '',
        },
        {
          // IS-07
          name: 'Innovative Applications of Technologies and Data Analysis for Internet of Thing',
          organizer: ['Prof. Rung-Ching Chen', 'Prof. Yung-Fa Huang'],
          contact: ['crching@cyut.edu.tw', 'yfahuang@cyut.edu.tw'],
          note: '',
        },
        {
          // IS-08
          name: 'Artificial Intelligence and Internet of Things Technologies and Applications',
          organizer: [
            'Prof. Yu-Huei Cheng',
            'Prof. Jiun-Jian Liaw',
            'Prof. Che-Nan Kuo',
          ],
          contact: [
            'yuhuei.cheng@gmail.com',
            'jjliaw@cyut.edu.tw',
            'cn.kuo@ctbc.edu.tw',
          ],
          note: '',
        },
        {
          // IS-09
          name: 'Forecasting Technique for Renewable Power Generation',
          organizer: ['Prof. Yuan-Kang Wu'],
          contact: ['allenwu@ccu.edu.tw'],
          note: '',
        },
        {
          // IS-10
          name: 'Intelligent Systems and Control',
          organizer: ['Prof. Kuo-Hsien Hsia'],
          contact: ['khhsia@yuntech.edu.tw'],
          note: '',
        },
        {
          // IS-11
          name: 'Artificial Intelligence for Engineering Business Management',
          organizer: [
            'Prof. Hsiao-Ting Tseng',
            'Prof. Yu-Chih Wei',
            'Prof. Chia-Yu Lin',
            'Prof. Chi-Hua Chen',
          ],
          contact: [
            'appleapple928@gmail.com',
            'vickrey@gmail.com',
            'sallylin0121@gmail.com',
            'chihua0826@gmail.com',
          ],
          note: '',
        },
        {
          // IS-12
          name: 'Advanced Artificial Intelligence Technologies for Smart Manufacturing',
          organizer: [
            'Prof. Her-terng Yau',
            'Prof. Stephen D. Prior',
            'Prof. Yang Wang',
            'Prof. Yunhua Li',
          ],
          contact: ['htyau@ncut.edu.tw'],
          note: '',
        },
        {
          // IS-13
          name: 'Robots and Systems for Life Support',
          organizer: ['Prof. Shenglin Mu', 'Prof. Shota Nakashima'],
          contact: ['mu.shenglin.du@ehime-u.ac.jp', 's-naka@yamaguchi-u.ac.jp'],
          note: '',
        },
      ],
    }
  },
  components: {
    SpecialSessionCard,
  },
  head() {
    return {
      title: `Special Sessions | ${this.$title}`,
    }
  },
}
</script>
