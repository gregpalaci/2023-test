<template>
     <component :is="require(`~/static/images/je.svg?inline`)" />
</template>



<script lang="js">
import { defineComponent} from '@nuxtjs/composition-api';

export default defineComponent({
  name: "JetLogo",
})
</script>