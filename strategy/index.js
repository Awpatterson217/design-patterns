/**
 * @author Adam W Patterson
 */

const { error: errorMsg } = console;

function Context(strategy = null) {
  this.strategy = strategy;

  this.setStrategy = (strategy) => {
    this.strategy = strategy
  }

  this.run = () => {
    if (!this.strategy) {
      return errorMsg('No Strategy!');
    }

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
