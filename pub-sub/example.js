const {
  createEmitter,
  createListener,
  createEventChannel
} = require('./');

const eventChannel  = createEventChannel();
const eventEmitter  = createEmitter(eventChannel);
const eventListener = createListener(eventChannel)

const { log } = console;

eventListener.on('init', () => {
  log('Application initializing!');
});

eventListener.on('update', (data) => {
  log('Application updated with:', data);
});

eventListener.on('close', () => {
  log('Application closing!');
});

eventEmitter.emit('init');
eventEmitter.emit('update', 'some data');
eventEmitter.emit('close');
