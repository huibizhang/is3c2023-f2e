<template>
  <Main pageName="Registration">
    <ContentBlock title="Registration">
      <div class="flex justify-center py-5">
        <a href="https://conference.iis.sinica.edu.tw/surl/is3c2020/sub">
          <div
            class="flex items-center justify-center space-x-2 rounded bg-gray-200 px-4 py-2 text-lg font-bold text-blue-600 transition-all hover:scale-105 hover:bg-gray-100 hover:text-blue-400 active:scale-95"
            href="https://conference.iis.sinica.edu.tw/surl/is3c2020/sub"
          >
            <span> Go to Registration System</span>
          </div>
        </a>
      </div>
    </ContentBlock>
    <hr />
    <ContentBlock class="inset-0 mx-auto sm:max-w-xl">
      <div>
        <div class="flex justify-end">
          <label
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
          </label>
        </div>
      </div>
      <div class="flex flex-col space-y-5 py-3">
        <PriceCategoryCard
          v-for="price in prices"
          :key="price.name"
          v-bind="{ showSpecialDiscount: specialDiscountChecked, ...price }"
        />
      </div>
    </ContentBlock>
  </Main>
</template>

<script>
import PriceCategoryCard from '~/components/PriceCategoryCard.vue'

export default {
  name: 'Registration',
  data() {
    return {
      specialDiscountChecked: true,
      prices: [
        {
          name: 'Author',
          NTD: 16500,
          USD: 550,
          unit: 'one person',
          extra: [
            {
              NTD: 13500,
              USD: 450,
              unit: 'second submission from one person',
              earlyBird: {
                NTD: 12000,
                USD: 400,
              },
            },
            {
              NTD: 10500,
              USD: 350,
              unit: 'third submission from one person',
              earlyBird: {
                NTD: 9000,
                USD: 300,
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
          unit: 'one person',
        },
        {
          name: 'Additional Page',
          NTD: 3000,
          USD: 100,
          unit: 'one page',
        },
      ],
    }
  },
  components: {
    PriceCategoryCard,
  },
  head() {
    return {
      title: `Registration | ${this.$title}`,
    }
  },
}
</script>
