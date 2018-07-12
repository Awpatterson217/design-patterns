/**
 * @author Adam W Patterson
 */

const { error } = console;

function Context(strategy = { run: () => error('No strategy set!')}) {
  this.strategy = strategy;

  this.setStrategy = (strategy) => {
    this.strategy = strategy
  }

  this.run = () => {
    this.strategy.run();
  }
}

function Strategy(method) {
  this.run = method;
}

module.exports = {
  Context,
  Strategy
};
