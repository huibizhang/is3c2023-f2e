<template>
  <Main pageName="Organizing Committee">
    <ContentBlock title="Organizing Committee">
      <div v-for="com in committees" :key="com.category" class="group">
        <hr class="mt-3 group-first:hidden" />
        <ContentBlock :title="com.category" level="2">
          <div v-for="mem in com.members" :key="`${com.category}-${mem}`">
            {{ mem }}
          </div>
        </ContentBlock>
      </div>
      <br />
      <center>Fax: +886-4-2392-7331</center>
    </ContentBlock>
  </Main>
</template>

<script>
import Email from '~/components/Email.vue'

export default {
  name: 'Contact',
  data() {
    return {
      committees: [
        {
          category: 'Honorary Chairs',
          members: [
            'Wen-Yuan Chen, National Chin-Yi University of Technology, Taiwan',
          ],
        },
        {
          category: 'General Chair',
          members: [
            'Sheng-Chih Yang, National Chin-Yi University of Technology, Taiwan',
          ],
        },

        {
          category: 'General Co-chair',
          members: [
            'Meng-Hui Wang, National Chin-Yi University of Technology, Taiwan',
          ],
        },

        {
          category: 'Technical Program Committee Chairs',
          members: [
            'Hsiung-Cheng Lin, National Chin-Yi University of Technology, Taiwan',
          ],
        },
        {
          category: 'Publication Chairs',
          members: [
            'Chia-Hung Lin, National Chin-Yi University of Technology, Taiwan',
            'Jian-Xing Wu, National Chin-Yi University of Technology, Taiwan',
            'PAUL P. LIN, Cleveland State University, USA',
          ],
        },

        {
          category: 'Steering Committee:',
          members: [
            'Yaow-Ming Chen, National Taiwan University, Taiwan',
            'Tsorng-Juu Liang, National Cheng Kung University, Taiwan',
            'Huang-Jen Chiu, National Taiwan University of Science and Technology, Taiwan',
            'Yen-Shin Lai, National Taipei University of Technology, Taiwan',
          ],
        },

        {
          category: 'Technical Program Committee',
          members: [
            'Udaya Madawala, University of Auckland, New Zealand',
            'Keiji Wada, Tokyo Metropolitan University, Japan',
            'Junichi Itoh, Nagaoka University of Technology, Japan',
            'Chun Taek Rim, Korea Advanced Institute of Science and Technology, Korea',
            'Herbert Ginn, University of South Carolina, USA',
            'Henry Chung, City Univeristy of Hong Kong, Hong Kong',
            'Mei-Ling Shyu, University of Miami, USA',
            'Shu-Ching Chen, Florida International University, USA',
            'Jih-Sheng (Jason) Lai, Virginia Polytechnic Institute and State University, USA',
            'Hao Ying, Wayne State University, Detroit, USA',
            'Zhong Li, Fern University Hagen, Germany',
            "Richard Chbeir, Université de Pau et des Pays de l'Adour, France",
            'Frode Eika Sandnes, Oslo University College, Norway',
            'Maciej Ogorzalek, Jagiellonian University, Poland',
            'Radu Catalin Tarca, University of Oradea, Romania',
            'Cheng Siong Lee, Monash University, Australia',
            'Peng Liu, North China Electric Power University, China',
            'Ryuichi Yokoyama, Waseda University, Japan',
            'Guanrong Chen, City University of Hong Kong, Hong Kong',
            'Wallace K. S. Tang, City University of Hong Kong, Hong Kong',
            'Shyh-Jier Huang, National Cheng Kung University, Taiwan',
            'Juhng-Perng SU, National Dong-Hwa University, Taiwan',
            'Yaow-Ming Chen, National Taiwan University, Taiwan',
            'Mohd Ashraf Ahmad, Universiti Malaysia Pahang, Malaysia',
            'Nor Maniha Abdul Ghani, Universiti Malaysia Pahang, Malaysia',
            'Arnulfo M. Mascarinas, Bicol University, Philippines',
            'Adora S. Pili, Technological University of the Philippines, Philippines',
            'Tirso Ronquillo, Batangas State University, Philippines',
            'Le Anh Phuong, University of Education of Hue University, Vietnam',
            'Worajit Setthapun, Chiang Mai Rajabhat University, Thailand',
            'R. S. Beniwal, CSIR-NISCAIR, New Delhi, India',
            'J. G. Barajas-Ramirez, Institute for Scientific and Technological Research of San Luis Potosi, Mexico',
            'Trung T Pham, Universidad de Talca, Campus Lircay Talca, Chile',
            'Kuei-Hsiang Chao, National Chin-Yi University of Technology, Taiwan',
            'Dan Chen, National Taiwan University, Taiwan',
            'Jiann-Fuh Chen, National Cheng Kung University, Taiwan',
            'Tsorng-Juu Liang, National Cheng Kung University, Taiwan',
            'Faa-Jeng Lin, National Central University, Taiwan',
            'Yen-Shin Lai, National Taipei University of Technology, Taiwan',
          ],
        },
        {
          category: 'Invited Session Organizer',
          members: [
            'Jun-Juh Yan, Taiwan',
            'Shiue-Der Lu, Taiwan',
            'Chen-Kun Tsung, Taiwan',
            'Feng-Chang Gu, Taiwan',
            'Jian-Xing Wu, Taiwan',
            'Bo-Lin Jian, Taiwan',
          ],
        },
      ],
    }
  },
  components: {
    Email,
  },
  head() {
    return {
      title: `Organizing Committee | ${this.$title}`,
    }
  },
}
</script>
