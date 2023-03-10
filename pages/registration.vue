<template>
  <Main pageName="Registration">
    <ContentBlock title="Registration">
      <div class="flex justify-center py-5">
        <link-out-button
          link="https://conference.iis.sinica.edu.tw/surl/is3c2023/sub"
          text="Go to Registration System"
        />
      </div>
      <!-- <div
        class="inset-0 mx-auto my-10 flex w-5/6 max-w-xl items-center justify-center rounded-md bg-gray-100 py-10 text-xl font-bold text-gray-500"
      >
        Coming Soon.
      </div> -->
    </ContentBlock>
    <hr />
    <ContentBlock class="inset-0 mx-auto sm:max-w-xl">
      <div>
        <div class="flex justify-end">
          <!-- <label
            :class="[
              'flex items-center space-x-2 rounded-lg px-4 py-2 transition-all',
              specialDiscountChecked
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-500',
            ]"
          >
            <input
              type="checkbox"
              v-model="specialDiscountChecked"
              class="h-5 w-5 appearance-none rounded-full border-2 checked:border-blue-300 checked:bg-blue-600 checked:bg-check"
            />
            <div class="text-sm">Show Special Discount</div>
          </label> -->
        </div>
      </div>
      <div class="flex flex-col space-y-5 py-3">
        <PriceCategoryCard
          v-for="price in prices"
          :key="price.name"
          v-bind="{
            showSpecialDiscount: specialDiscountChecked,
            outOfEarlyBirdDate: outOfEarlyBirdDate,
            ...price,
          }"
        />
      </div>
    </ContentBlock>
  </Main>
</template>

<script>
import LinkOutButton from '~/components/LinkOutButton.vue'
import PriceCategoryCard from '~/components/PriceCategoryCard.vue'

export default {
  name: 'Registration',
  data() {
    return {
      endOfEarlyBirdDate: new Date('2023/05/15'),
      // endOfEarlyBirdDate: new Date('2022/08/12'),
      specialDiscountChecked: true,
      outOfEarlyBirdDate: false,
      prices: [
        {
          name: 'Author',
          NTD: 16500,
          USD: 550,
          // unit: 'one person',
          unit: 'first paper',
          extra: [
            {
              NTD: 12000,
              USD: 400,
              // unit: 'second submission from one person',
              unit: 'second paper',
              earlyBird: {
                NTD: 10500,
                USD: 350,
              },
            },
            {
              NTD: 9000,
              USD: 300,
              // unit: 'third submission from one person',
              // unit: 'third paper',
              unit: 'third paper and above',
              earlyBird: {
                NTD: 7500,
                USD: 250,
              },
            },
          ],
          earlyBird: {
            NTD: 15000,
            USD: 500,
          },
          sepcialDiscounts: 'Members of IEEE: Free one-day local tour',
        },
        {
          name: 'Non-Author',
          NTD: 6600,
          USD: 220,
          // unit: 'one person',
          unit: 'first paper',
        },
        {
          name: 'Additional Page',
          NTD: 3000,
          USD: 100,
          // unit: 'one page',
          unit: 'one extra page',
        },
        {
          name: 'Local Tour',
          NTD: 1500,
          USD: 50,
          // unit: 'one page',
          unit: 'one person',
        },
      ],
    }
  },
  mounted() {
    const now = new Date().getTime()
    const deadline = this.endOfEarlyBirdDate.getTime()

    if (now >= deadline) {
      this.outOfEarlyBirdDate = true
    } else {
      this.outOfEarlyBirdDate = false
    }
  },
  components: {
    PriceCategoryCard,
    LinkOutButton,
  },
  head() {
    return {
      title: `Registration | ${this.$title}`,
    }
  },
}
</script>
