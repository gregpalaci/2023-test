<template>
  <div>
    <TheHeader class="bg-orange-500	"></TheHeader>
    <header class="mx-auto mt-3 w-3/5 pb-4 text-center">
      <h1 class="text-4xl font-bold text-orange-500">
        Order Takeaway And Delivery Online in London
      </h1>
      <h3 class="text-xl font-bold">Find takeaways and restaurants near you in London</h3>
    </header>
    <JustEat />
    
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>
