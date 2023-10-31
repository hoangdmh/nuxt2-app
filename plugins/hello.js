export default ({ context }, inject) => {
    // Inject $hello(message) in Vue, context and store.
    inject('hello', message => console.log(`Hello ${message}!`))
  }