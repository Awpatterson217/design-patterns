const {
  Context,
  Strategy
} = require('./');

const { log } = console;

const context = new Context();

const run = function() {
  log(`Logging from ${this.name}!`);
};

const strategyOne = {
  name: 'strategyOne',
  run
};

const strategyTwo = {
  name: 'strategyTwo',
  run
};

const strategyThree = {
  name: 'strategyThree',
  run
};

const strategyFour = {
  name: 'strategyFour',
  run
};

context.setStrategy(strategyOne);
context.run();

context.setStrategy(strategyTwo);
context.run();

context.setStrategy(strategyThree);
context.run();

// Or:

const contextTwo = new Context(strategyFour);
contextTwo.run();
