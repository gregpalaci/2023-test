
  export default ({  $pinia, $toast, app },_inject) => {
    if (process.client) {
        $pinia.use(({ store }) => {
          store.handleError = (errors) => {
            const { message } = app.$errorHandler.setAndParse(errors);
            $toast.show(message)
          }
    
          store.$subscribe((mutation) => {
            // $toast.show()
            console.log("subscribe", mutation);
          })
          store.$onAction((action) => {
            // react to store actions
            console.log("onAction", action);
          })
        })
       
    }
}
      
