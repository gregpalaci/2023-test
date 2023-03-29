<template>
  <div class="carousel-wrapper  mt-10 mb-10 w-full text-slate-800 shadow-inner border-2 border-slate-200">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="(restaurant, index) in restaurants" :key="index" class="img-wrapper w-full text-center"> 
      <div class="p-2">
          <img class="mx-auto" :src="restaurant.LogoUrl" />
          <h3 class="font-semibold mt-10">{{ restaurant.Name }}</h3>
        </div>

       

          <div class="mx-auto flex justify-center items-center mt-5">

          <StarRating
            :star-style="{
              fullStarColor: '#f36805',
              emptyStarColor: '#CCC',
              starWidth: 15,
              starHeight: 15,
            }"
            :rating="restaurant.Rating.StarRating"
          />
        </div>
        <div class="my-2 width-full font-semibold ">{{ restaurant.Rating.toFixed(2) }}</div>

        <span v-for="(cuisine, cuisineIndex) in restaurant.CuisineTypes" :key="cuisineIndex" class="px-1">
            <span class="badge badge-accent badge-outline">{{cuisine}}</span>
        </span>
      
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  props: {
    restaurants: {
        type: Array,
        required: true
    }
  },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        slidesToShow: 2,
        swipeToSlide: true,
        arrows: true,
        dots: false,
      },
    };
  },
//   methods: {
//     showNext() {
//       this.$refs.carousel.next();
//     },
//   },
};
</script>
