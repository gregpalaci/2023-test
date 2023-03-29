  export default ({  $pinia, app },_inject) => {
    if (process.client) {
        $pinia.use(({ store }) => {
          store.setLatLon = async () => {
            const  {coords : {latitude, longitude}} = await app.$geolocation.getCurrentPosition().catch((e) => console.log(e))
            store.$patch({
                latitude, longitude
            })

           await store.getPostcodeByLatLon(latitude, longitude)
        
            return {latitude, longitude}
          }
    })
}}
