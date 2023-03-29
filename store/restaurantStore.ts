import { defineStore } from 'pinia';
import Fuse from 'fuse.js';

export interface ISearchRootState {
  handleError: any;
  longitude: String;
  latitude: String;
  postCodeSuggestions: Array<String>
  resultRestaurants: Array<String>
}

export interface Cuisine {
  Name: string;
}

export const useRestaurantStore = defineStore('restaurantStore', {
  state: (): ISearchRootState => ({
   
    handleError: '',
    longitude: '',
    latitude: '',
    postCodeSuggestions: [],
    resultRestaurants: []
  }),
  actions: {
    async addToPostcodeSearch(postcode:String) {
      if (!postcode) { return }
      const { result  } = await this.$nuxt.$axios.$get(`https://api.postcodes.io/postcodes/${postcode}/autocomplete`).catch(e => console.log(e));

      this.postCodeSuggestions = result;
      return result;
    },

    autoCompletePostCode(search:string) {
      const fuse = new Fuse(this.postCodeSuggestions);
      const results = fuse.search(search);
      const formattedResults = results.map(({item}) => item)
      this.postCodeSuggestions = formattedResults
      this.addToPostcodeSearch(search);
      return formattedResults;
    },

    async getPostcodeByLatLon(latitude: String, longitude: String) {
      if (!latitude || !longitude) return
      const { result } =  await this.$nuxt.$axios.$get(
        `https://postcodes.io/outcodes?lon=${longitude}&lat=${latitude}`
      ).catch(e => console.log(e));

      this.postCodeSuggestions = result.map((item : any) => item.outcode)
      
      return result
    },

 
    async getRestaurantsBypostcode(postcode: String, ...params: any) {
      if (!postcode) { return }
      const searchParams = new URLSearchParams(params);
      const {Restaurants} = await this.$nuxt.$axios
        .$get(
          'https://uk.api.just-eat.io' +
            `/restaurants/bypostcode/${postcode}?${searchParams.toString()}`
        ) 
        .catch((e) => {
          this.handleError(e);
        });

        this.resultRestaurants = Restaurants.filter((restaurant: { IsOpenNow: Boolean; }) => restaurant.IsOpenNow === false).map(({IsOpenNow, Name, Rating, LogoUrl, CuisineTypes} : any) => {
        
          return {
            IsOpenNow, Name, Rating : this.getStarRating(Rating.StarRating), LogoUrl, CuisineTypes : this.getCuisineTypes(CuisineTypes)
          }
        })
        
        return Restaurants
      },

  },
  getters: {
    getStarRating: (_state) => {
      return (rating : number) => rating / 6 * 100 / 20
    },
    getCuisineTypes: (_state) => {
      return (Types : Array<Cuisine>) => {
        return Types.map((cuisine : Cuisine) => {
        
          return cuisine.Name
          
        })
      }
    },
  }
});
