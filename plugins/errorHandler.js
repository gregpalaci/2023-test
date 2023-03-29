import ErrorHandler from '@zaengle/error-handler'

export default ({ _app }, inject) => {
  inject('errorHandler', new ErrorHandler({
    401: `Whoops! You can't access that.`,
    404: `Uh oh! We couldn't find that.`,
    500: `Oh no! Server problem.`,
    429: `Oops you did it again, too many requests!`,
  }, "Uh oh!"))
}