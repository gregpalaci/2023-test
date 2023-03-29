<template>
 <footer class="footer p-10 bg-slate-200	text-base-content">
        <div>
          <h2 class="text-lg">Find the best takeaways and restaurants near you in London</h2>
        <img width="200px" src="https://d30v2pzvrfyzpo.cloudfront.net/b/hw/img/decoration/apps_promo-wide-je.png" />
       
        </div> 
        <div>
        <span class="footer-title">Top cuisines</span> 
        <a class="link link-hover">British</a> 
        <a class="link link-hover">Indian</a> 
        <a class="link link-hover">Chinese</a> 
        <a class="link link-hover">Thai</a>
        </div> 
        <div>
        <span class="footer-title">Popular locations</span> 
        <a class="link link-hover">About us</a> 
        <a class="link link-hover">Contact</a> 
        <a class="link link-hover">Jobs</a> 
        <a class="link link-hover">Press kit</a>
        </div> 
        <div>
        <span class="footer-title">Top brands</span> 
        <a class="link link-hover">Terms of use</a> 
        <a class="link link-hover">Privacy policy</a> 
        <a class="link link-hover">Cookie policy</a>
        </div>
    </footer>

</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'TheFooter'
  })
</script>
   