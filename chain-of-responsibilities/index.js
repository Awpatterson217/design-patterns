/**
 * @author Adam W Patterson
 */

function Receiver(handlerFn) {
  this.handle = handlerFn
}

function Sender(receivers = []) {
  this.receivers = new Set(receivers);
}

Sender.prototype = {
  add(...receivers) {
    receivers.forEach(r => this.receivers.add(r));
  },
  delete(receiver) {
    this.receivers.delete(receiver);
  },
  clear() {
    this.receivers.clear();
  },
  send(commandObject) {
    let receiver;
    const iterator = this.receivers[Symbol.iterator]();

    do {
      receiver = iterator.next().value
    } while (!receiver.handle(commandObject))
  }
}

module.exports = {
  Sender,
  Receiver
}
