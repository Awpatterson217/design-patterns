/**
 * @author Adam W Patterson
 */

function Subject(observers = []) {
  this.observers = new Set(observers);

  this.subscribe = (observer) => {
    this.observers.add(observer);
  }

  this.unsubscribe = (observer) => {
    this.observers.delete(observer);
  }

  this.broadcast = (data) => {
    this.observers.forEach(obs => obs.observe(data));
  }
}

function Observer(handlerFn) {
  this.observe = handlerFn
}

module.exports = {
  Observer,
  Subject
};
