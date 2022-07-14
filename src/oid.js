'use strict';

class Oid
{
  /**
   * @param {(string|Oid)} id
   */
  constructor(id){
    if (id instanceof Oid) {
      id = id.getId();
    }
    this._id = id;
    this._timestamp = null;
    this._random = null;
    this._index = null;
  }

  /**
   * @returns {string}
   */
  getId(){
    return this._id;
  }

  /**
   * @returns {number}
   */
  getTimestamp(){
    if (this._timestamp === null) {
      const length = this._id.length;
      this._timestamp = parseInt(this._id.substring(0, length / 2 - 4), 16);
    }
    return this._timestamp;
  }

  /**
   * @returns {number}
   */
  getRandom(){
    if (this._random === null) {
      const length = this._id.length;
      this._random = parseInt(this._id.substring(length / 2 - 4, length - 6), 16);
    }
    return this._random;
  }

  /**
   * @returns {number}
   */
  getIndex(){
    if (this._index === null) {
      const length = this._id.length;
      this._index = parseInt(this._id.substring(length - 6, length), 16);
    }
    return this._index;
  }

  /**
   * @returns {string}
   */
  toString(){
    return this._id;
  }
}

module.exports = Oid;