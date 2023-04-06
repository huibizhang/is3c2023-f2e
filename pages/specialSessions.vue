<template>
  <Main pageName="Special Sessions">
    <ContentBlock title="About the Proposal Submission of Special Session">
      Dear All Special Session Organizers,<br />
      IS3C2023 welcomes prospective authors to organize a special session in our
      conference. Organizer is responsible for inviting at least six papers. The
      proposal must be submitted to the committee (
      <a class="link" href="mailto:is3c2023@ncut.edu.tw"
        >is3c2023@ncut.edu.tw</a
      >
      ) by <span class="text-[red]">April 30, 2023</span>. Once the proposal is
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
        href="/files/Special%20Session%20Proposals%20for%20the%20IS3C2023%20(Template).112.3.31.doc"
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
import SpecialSessionCard from '~/components/SpecialSessionCard.vue'

export default {
  name: 'SpecialSessions',
  data() {
    return {
      specialSessions: [
        {
          // IS-01
          name: 'Measured Signal Collection, Processing and Applications',
          organizer: ['Prof. Hsiung-Cheng Lin', 'Prof. Meng-Hua Yen'],
          contact: ['hclin@ncut.edu.tw'],
          note: '',
          more: 'IS01-special-session-proposals.pdf',
        },
        {
          // IS-02
          name: 'Robust Control and Signal Processing',
          organizer: ['Prof. Jun-Juh Yan', 'Prof. Hang-Hong Kuo'],
          contact: ['jjyan@ncut.edu.tw'],
          note: '',
          more: 'IS02-special-session-proposals.pdf',
        },
        {
          // IS-03
          name: 'Advanced Computer Vision Technologies',
          organizer: [
            'Prof. Guo-Shiang Lin',
            'Prof. Chih-Chung Hsu',
            'Prof. Chih-Yang Lin',
          ],
          contact: [
            'gslin@ncut.edu.tw',
            'cchsu@gs.ncku.edu.tw',
            'andrewlin@saturn.yzu.edu.tw',
          ],
          note: '',
          more: 'IS03-special-session-proposals.pdf',
        },
        {
          // IS-04
          name: 'Soft Computing and its Applications',
          organizer: [
            'Prof. Chi-Yuan Lin',
            'Prof. Cheng-Jian Lin',
            'Prof. Sheng-Chih Yang',
          ],
          contact: ['chiyuan@ncut.edu.tw'],
          note: '',
          more: 'IS04-special-session-proposals.pdf',
        },
        {
          // IS-05
          name: 'Network Security Is Applied in the IoT System',
          organizer: ['Prof. Sung-Jung Hsiao'],
          contact: ['sungjung@gs.takming.edu.tw'],
          note: '',
          more: 'IS05-special-session-proposals.pdf',
        },
        {
          // IS-06
          name: 'Engineering Applications of Deep Learning and Artificial Intelligence (EADLAI)',
          organizer: [
            'Prof. Chih-Hung Wu',
            'Prof. Chih-Chin Lai',
            'Prof. Shing-Tai Pan',
          ],
          contact: ['johnw@nuk.edu.tw', 'cclai@nuk.edu.tw', 'stpan@nuk.edu.tw'],
          note: '',
          more: 'IS06-special-session-proposals.pdf',
        },
        {
          // IS-07
          name: 'Power Quality and Energy System',
          organizer: ['Prof. Cheng-I Chen', 'Prof. Yu-Jen Liu'],
          contact: ['cichen@ee.ncu.edu.tw', 'azenliu@ccu.edu.tw'],
          note: '',
          more: 'IS07-special-session-proposals.pdf',
        },
        {
          // IS-08
          name: 'Computer Graphics Workshop 2023',
          organizer: ['Prof. Hung-Kuang Chen'],
          contact: ['hank@ncut.edu.tw'],
          note: '',
          more: 'IS08-special-session-proposals.pdf',
        },
        {
          // IS-09
          name: 'Intelligent Computation and AIoT Applications',
          organizer: ['Prof. Yu-Huei Cheng', 'Prof. Yu-Da Lin'],
          contact: [
            'yhcheng@cyut.edu.tw',
            'yuhuei.cheng@gmail.com',
            'yudalinemail@gms.npu.edu.tw',
          ],
          note: '',
          more: 'IS09-special-session-proposals.pdf',
        },
        // {
        //   // IS-10
        //   name: 'Intelligent Systems and Control',
        //   organizer: ['Prof. Kuo-Hsien Hsia'],
        //   contact: ['khhsia@yuntech.edu.tw'],
        //   note: '',
        // },
        // {
        //   // IS-11
        //   name: 'Artificial Intelligence for Engineering Business Management',
        //   organizer: [
        //     'Prof. Hsiao-Ting Tseng',
        //     'Prof. Yu-Chih Wei',
        //     'Prof. Chia-Yu Lin',
        //     'Prof. Chi-Hua Chen',
        //   ],
        //   contact: [
        //     'appleapple928@gmail.com',
        //     'vickrey@gmail.com',
        //     'sallylin0121@gmail.com',
        //     'chihua0826@gmail.com',
        //   ],
        //   note: '',
        // },
        // {
        //   // IS-12
        //   name: 'Advanced Artificial Intelligence Technologies for Smart Manufacturing',
        //   organizer: [
        //     'Prof. Her-terng Yau',
        //     'Prof. Stephen D. Prior',
        //     'Prof. Yang Wang',
        //     'Prof. Yunhua Li',
        //   ],
        //   contact: ['htyau@ncut.edu.tw'],
        //   note: '',
        // },
        // {
        //   // IS-13
        //   name: 'Robots and Systems for Life Support',
        //   organizer: ['Prof. Shenglin Mu', 'Prof. Shota Nakashima'],
        //   contact: ['mu.shenglin.du@ehime-u.ac.jp', 's-naka@yamaguchi-u.ac.jp'],
        //   note: '',
        // },
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
