'use strict';

const Oid = require('./oid');
const {hexmap, createRandom, createSequence, createTimestamp} = require('./utils');
const sequence = createSequence(0xffffff);
const random = createRandom(6);

class Oid563 extends Oid
{
  /**
   * @param {(string|Oid)} id
   * @throws {TypeError}
   */
  constructor(id){
    if (!Oid563.validate(id)) {
      throw new TypeError('Invalid ID');
    }
    super(id);
  }

  /**
   * @param {(string|Oid|number)} [id]
   * @returns {Oid563}
   */
  static create(id){
    if (id === void 0) {
      id = Oid563.generate(createTimestamp());
    } else if (typeof id === 'number') {
      id = Oid563.generate(id);
    }
    return new Oid563(id);
  }

  /**
   * @param {(string|Oid)} id
   * @returns {boolean}
   */
  static validate(id){
    if (id instanceof Oid) {
      id = id.getId();
    }
    return /^[0-9a-f]{28}$/.test(id);
  }

  /**
   * @param {number} timestamp
   * @returns {string}
   */
  static generate(timestamp){
    let id = '';
    const index = sequence();
    /* 5-byte timestamp */
    id += hexmap[~~(timestamp / (0xffffffff + 1)) & 0xff];
    id += hexmap[(timestamp >> 24) & 0xff];
    id += hexmap[(timestamp >> 16) & 0xff];
    id += hexmap[(timestamp >> 8) & 0xff];
    id += hexmap[timestamp & 0xff];
    /* 6-byte random */
    id += hexmap[random[0]];
    id += hexmap[random[1]];
    id += hexmap[random[2]];
    id += hexmap[random[3]];
    id += hexmap[random[4]];
    id += hexmap[random[5]];
    /* 3-byte index */
    id += hexmap[(index >> 16) & 0xff];
    id += hexmap[(index >> 8) & 0xff];
    id += hexmap[index & 0xff];
    return id;
  }
}

module.exports = Oid563;