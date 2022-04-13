<template>
  <div class="flex flex-col rounded-md border shadow-md">
    <div class="border-b bg-gray-100 py-3 px-4 text-lg font-bold">
      {{ name }}
    </div>
    <div class="p-2 pt-0">
      <div class="border-b p-2 last:border-b-0">
        <div class="py-1 font-bold text-gray-600">
          Registration Fee
          <span v-if="earlyBird && showSpecialDiscount" class="text-lime-700"
            >(Early bird)</span
          >
        </div>
        <div class="space-y-2">
          <PriceCard
            v-bind="{
              NTD,
              USD,
              unit,
              earlyBird,
              showSpecialDiscount,
            }"
          />

          <!-- second and third -->
          <PriceCard
            v-for="(ex, index) in extra"
            :key="`${name}-${index}`"
            v-bind="{
              ...ex,
              showSpecialDiscount,
            }"
          />
        </div>
      </div>
      <div
        v-if="sepcialDiscounts && showSpecialDiscount"
        class="border-b p-2 last:border-b-0"
      >
        <div class="py-1 font-bold text-gray-600">Special Discount</div>
        <div class="pl-2">{{ sepcialDiscounts }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceCard from './PriceCard.vue'

export default {
  name: 'PriceCategoryCard',
  props: [
    'name',
    'NTD',
    'USD',
    'unit',
    'extra',
    'earlyBird',
    'sepcialDiscounts',
    'showSpecialDiscount',
  ],
  components: {
    PriceCard,
  },
}
</script>
