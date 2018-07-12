const {
  Observer,
  Subject
} = require('./');

const { log } = console;

const observerOne = new Observer(
  data => log(`Data from observerOne: ${data}`)
);

const observerTwo = new Observer(
  data => log(`Data from observerTwo: ${data}`)
);

const observerThree = new Observer(
  data => log(`Data from observerThree: ${data}`)
);

const observerFour = new Observer(
  data => log(`Data from observerFour: ${data}`)
);

const observers = [
  observerOne,
  observerTwo,
  observerThree,
  observerFour
]

const subject = new Subject(observers);

// Or individually: subject.subscribe(observer)

subject.broadcast('fake data');
