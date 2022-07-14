'use strict';

const Oid = require('./oid');
const {hexmap, createRandom, createSequence, createTimestamp} = require('./utils');
const sequence = createSequence(0xffffff);
const random = createRandom(5);

class Oid453 extends Oid
{
  /**
   * @param {(string|Oid)} id
   * @throws {TypeError}
   */
  constructor(id){
    if (!Oid453.validate(id)) {
      throw new TypeError('Invalid ID');
    }
    super(id);
  }

  /**
   * @param {(string|Oid|number)} [id]
   * @returns {Oid453}
   */
  static create(id){
    if (id === void 0) {
      id = Oid453.generate(createTimestamp());
    } else if (typeof id === 'number') {
      id = Oid453.generate(id);
    }
    return new Oid453(id);
  }

  /**
   * @param {(string|Oid)} id
   * @returns {boolean}
   */
  static validate(id){
    if (id instanceof Oid) {
      id = id.getId();
    }
    return /^[0-9a-f]{24}$/.test(id);
  }

  /**
   * @param {number} timestamp
   * @returns {string}
   */
  static generate(timestamp){
    let id = '';
    const index = sequence();
    /* 4-byte timestamp */
    id += hexmap[(timestamp >> 24) & 0xff];
    id += hexmap[(timestamp >> 16) & 0xff];
    id += hexmap[(timestamp >> 8) & 0xff];
    id += hexmap[timestamp & 0xff];
    /* 5-byte random */
    id += hexmap[random[0]];
    id += hexmap[random[1]];
    id += hexmap[random[2]];
    id += hexmap[random[3]];
    id += hexmap[random[4]];
    /* 3-byte index */
    id += hexmap[(index >> 16) & 0xff];
    id += hexmap[(index >> 8) & 0xff];
    id += hexmap[index & 0xff];
    return id;
  }
}

module.exports = Oid453;