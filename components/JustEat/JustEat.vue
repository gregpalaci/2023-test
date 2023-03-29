<template>
  <div class="h-full min-h-screen mx-auto">
   

    <div class="mx-auto w-56 gap-20 justify-center items-center">
      <form>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Search By Postcode</span>
          </label>
          <label class="label">
            <span class="label-text">Locate me</span>
            <span
              @click="setLatLon()"
              class="w-5 h-5 text-black cursor-pointer"
              v-html="require(`/static/images/location.svg?raw`)"
            ></span>
          </label>

         

          <label class="input-group">
            <input
              type="text"
              placeholder="NW2 5HL"
              v-model="search"
              @input="searchPostCode()"
              class="input input-bordered"
            />

            <button class="btn" @click.prevent="getRestaurantsBypostcode()">
              Search
            </button>
          </label>

          <div v-if="restaurantState.postCodeSuggestions" class="pr-2">
            <ul
              class="w-full rounded border-2 border-t-0 border-slate max-h-32 overflow-y-scroll menu bg-base-100 flex-row"
            >
              <li
                v-for="(suggestion, index) in restaurantState.postCodeSuggestions"
                :key="index"
                class="w-full"
              >
                <a @click="search = suggestion">{{ suggestion }}</a>
              </li>
            </ul>
          </div>
        </div>
      </form>

     
    </div>
    <div v-if="restaurantState.resultRestaurants & restaurantState.resultRestaurants.length > 1" class="mt-100 max-w-xl	mx-auto">
      <SlickSlide :restaurants="restaurantState.resultRestaurants" />

      </div>
  </div>
</template>

<script lang="js">
import { defineComponent, useContext, useAsync, ref,  onMounted } from '@nuxtjs/composition-api';
import { useRestaurantStore } from '~/store/restaurantStore';



export default defineComponent({
  name: "JustEat",
  setup() {
    const search = ref("");
    const { $geolocation } = useContext();
    const restaurantState = useRestaurantStore();

    // const getPostcodeByLatLon = useAsync(async (lat, lon) => await restaurantState.getPostcodeByLatLon(lat, lon));
    const getAPI = () => {
      // return restaurantState.getRestaurantsBypostcode("NW2 5HL", ["cuisine", "thai"]);
      return restaurantState.getRestaurantsBypostcode(search.value);
    };
    const geolocation = useAsync(async () => await $geolocation.getCurrentPosition().catch((e) => console.log(e)));

    const searchPostCode = () => restaurantState.autoCompletePostCode(search.value);

    const getRestaurantsBypostcode = () => restaurantState.getRestaurantsBypostcode(search.value)

    const setLatLon = () =>  {
      restaurantState.setLatLon();
      restaurantState.getPostcodeByLatLon()
    }
    if (process.client) {
      onMounted(async () => {
       if (Number.isNaN(restaurantState.latitude) || Number.isNaN(restaurantState.longitude) || !restaurantState.longitude || !restaurantState.latitude) {  await setLatLon();
      }
    })

    }

    const resetCount = restaurantState.$reset.bind(restaurantState);
    return { restaurantState, getAPI, resetCount, geolocation, searchPostCode, search, getRestaurantsBypostcode, setLatLon };
  },
  
});
</script>
