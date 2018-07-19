const {
  Context,
  Strategy
} = require('./');

const { log } = console;
const { assign } = Object;

const context = new Context();

const run = function() {
  log(`Logging from ${this.name}!`);
};

const strategyOne = assign(
  new Strategy(run),
  { name: 'strategyOne' }
);

const strategyTwo = assign(
  new Strategy(run),
  { name: 'strategyTwo' }
);

const strategyThree = assign(
  new Strategy(run),
  { name: 'strategyThree' }
);

const strategyFour = assign(
  new Strategy(run),
  { name: 'strategyFour' }
);

context.setStrategy(strategyOne);
context.run();

context.setStrategy(strategyTwo);
context.run();

context.setStrategy(strategyThree);
context.run();

// Or:

const contextTwo = new Context(strategyFour);
contextTwo.run();
