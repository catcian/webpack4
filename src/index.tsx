import * as _ from 'lodash'

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return _.join(['world', this.greeting], ', ')
    // return 'hello' + this.greeting
  }

}

let greeter = new Greeter('world')

console.log(greeter.greet())