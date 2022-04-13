<template>
  <Main pageName="Conference Venue">
    <ContentBlock title="Conference Venue">
      <img src="/images/NCUT_SCHOOL.png" alt="" class="inset-0 mx-auto" /><br />
      <b>National Chin-Yi University of Technology</b> is located in Taiping
      District, an area with beautiful scenery.<br />
      <br />
      Tel: <a class="link" href="tel:+886423924505">886 (04) 23924505</a><br />
      Address:
      <a
        class="link"
        href="https://goo.gl/maps/vsDb2PmTfRQJTa2v7"
        target="_blank"
        >No.57, Sec. 2, Zhongshan Rd., Taiping Dist., Taichung 41170, Taiwan
        (R.O.C.)</a
      ><br />
      Fax: 886 (04) 23923363 <br />
      Email:
      <a class="link" href="mailto:is3c2020@ncut.edu.tw"
        >is3c2020@ncut.edu.tw</a
      >
    </ContentBlock>

    <hr />
    <ContentBlock title="About Directions">
      <a
        class="link"
        href="https://www.ncut.edu.tw/p/412-1000-253.php?Lang=zh-tw"
        >https://www.ncut.edu.tw/p/412-1000-253.php?Lang=zh-tw</a
      ><br />
      <a
        class="link"
        href="https://www.ncut.edu.tw/p/412-1000-239.php?Lang=zh-tw"
        >https://www.ncut.edu.tw/p/412-1000-239.php?Lang=zh-tw</a
      ><br />
      <br />
      <a href="/images/NCUT_MAP.png" target="_blank">
        <img class="rounded-lg" src="/images/NCUT_MAP.png" alt=""
      /></a>
    </ContentBlock>

    <hr />
    <ContentBlock
      title="National Chin-Yi University of Technology (Library) 6F Plan"
    >
      <a href="/images/NCUT_Library_6F_Plan.jpg" target="_blank">
        <img
          class="rounded-lg border"
          src="/images/NCUT_Library_6F_Plan.jpg"
          alt=""
        />
      </a>
    </ContentBlock>

    <hr />
    <ContentBlock title="About Taichung">
      <p>
        Taichung, located in the west-center part of the island, is the third
        largest city in Taiwan. For residents and visitors, Taichung is a modern
        and dynamic Asian city, marked by boulevards, high-rise buildings, and
        convenient transportation system. The population in Taichung is just
        over one million, and 60 percent of the whole population is from
        neighboring counties for engaging in business and industry. This city is
        blessed with a mild and beautiful climate. It seldom rains and the
        average temperature is about 26 °C; thus, many outdoor activities are
        held almost all year round. Recently, it has been selected as the Most
        Livable City in Taiwan, in a poll conducted by the prestigious business
        magazine, Common Health.
      </p>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d534108.4851649354!2d120.84302721539188!3d24.258728508975913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917dff97922ef%3A0x87523ee47ea6447f!2sTaichung%20City!5e1!3m2!1sen!2stw!4v1603705999750!5m2!1sen!2stw"
        class="inset-0 mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-lg"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <br />
      <p>
        Traditionally, Taichung is the main gathering area for cultural,
        political and commercial activities. In recent years, the city has
        experienced the rapid growth in multi-culture. This is also the reason
        that it receives a reputation of creativity and great innovation,
        especially its lifestyle. Almost all the popular fads in Taiwan's
        fascinating consumer culture-blending art and beauty into everyday life,
        such as garden cafes, garden tea houses, theme restaurants, and pearl
        (boba) milk tea, are originated from this city.
      </p>
      <p>
        Taichung is also home to many high-tech manufacturers such as
        optoelectronics and precision machinery industries. Besides the
        established Taichung Industrial Park, the largest one in Taiwan, about
        70 percent of Taiwan's newly developing industrial zones is also located
        in Taichung Metropolitan.
      </p>
      <br />
      <p>
        As this city is located in central Taiwan, it is extremely accessible
        for the residents or visitors from any corner in this island. Moreover,
        it is surrounded by famous tourist attractions such as the Sun Moon
        Lake, the Ali Mountain, the Kukuan Hot Spring, the Cingjing Farm, the
        historical town-Lukang, and so on. The pleasant climate, beautiful
        scenery, the rich history of art and culture, and the prosperous economy
        supply it with the glamour of a world-class metropolis.
      </p>
    </ContentBlock>
  </Main>
</template>

<script>
import Email from '~/components/Email.vue'

export default {
  name: 'ConferenceVenue',
  data() {
    return {
      emails: ['is3c2020@ncut.edu.tw', 'is3c2020@gm.ncut.edu.tw'],
    }
  },
  components: {
    Email,
  },
}
</script>
