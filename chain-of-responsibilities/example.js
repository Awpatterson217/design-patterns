const {
  Sender,
  Receiver
} = require('./');

const { log } = console;

const receivers = [
  new Receiver(
    commandObj => {
      if (commandObj === 0) {
        log('commandObj === 0');

        return true;
      }

      return false;
    }
  ),
  new Receiver(
    commandObj => {
      if (commandObj === 1) {
        log('commandObj === 1');

        return true;
      }

      return false;
    }
  ),
  new Receiver(
    commandObj => {
      if (commandObj === 2) {
        log('commandObj === 2');

        return true;
      }

      return false;
    }
  ),
  new Receiver(
    commandObj => {
      if (commandObj === 3) {
        log('commandObj === 3');

        return true;
      }

      return false;
    }
  ),
  new Receiver(
    commandObj => {
      if (commandObj === 4) {
        log('commandObj === 4');

        return true;
      }

      return false;
    }
  ),
  new Receiver(
    commandObj => {
      if (commandObj === 5) {
        log('commandObj === 5');

        return true;
      }

      return false;
    }
  )
]

const sender = new Sender(receivers);

sender.send(1); // 'commandObj === 1'
sender.send(2); // 'commandObj === 2'
sender.send(3); // 'commandObj === 3'
sender.send(4); // 'commandObj === 4'
sender.send(5); // 'commandObj === 5'
sender.send(0); // 'commandObj === 0'
