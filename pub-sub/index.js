/**
 * @author Adam W Patterson
 */

const { assign, create } = Object;
const { has, set, get } = Reflect;
const { add, forEach } = Set.prototype;

const listener = {
  on(event, cb) {
    if (has(this.eventChannel, event)) {
      return add.call(get(this.eventChannel, event), cb);
    }

    set(this.eventChannel, event, new Set([cb]));
  }
}

const emitter = {
  emit(event, data) {
    forEach.call(get(this.eventChannel, event), fn => fn(data));
  }
}

const createEventChannel = () => create(null);

const createListener = eventChannel => assign(
  create(listener), { eventChannel }
);

const createEmitter = eventChannel => assign(
  create(emitter), { eventChannel }
);

module.exports = {
  createEmitter,
  createListener,
  createEventChannel
};
