<template>
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <NuxtLink to="/">
      <JetLogo />
   </NuxtLink>
  </div>
  <div class="flex-none">
   
    
  </div>
</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import JetLogo from '../JetLogo/JetLogo.vue';




export default defineComponent({
    name: "TheHeader",
    components: { JetLogo }
})
</script>
   