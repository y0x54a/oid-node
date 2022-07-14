'use strict';

const {Oid} = require('../../src');
const {validOid453Inputs} = require('./resources');

describe('Oid', () => {
  test('constructor', () => {
    const input = validOid453Inputs[0];
    const oid1 = new Oid(input[0]);
    const oid2 = new Oid(oid1);
    expect(oid2._id).toBe(oid1._id);
  });

  test('getId', () => {
    const input = validOid453Inputs[0];
    const oid = new Oid(input[0]);
    expect(oid._id).toBe(input[0]);
    expect(oid.getId()).toBe(input[0]);
  });

  test('getTimestamp', () => {
    const input = validOid453Inputs[0];
    const oid = new Oid(input[0]);
    expect(oid._timestamp).toBeNull();
    expect(oid.getTimestamp()).toBe(input[1]);
    expect(oid._timestamp).not.toBeNull();
  });

  test('getRandom', () => {
    const input = validOid453Inputs[0];
    const oid = new Oid(input[0]);
    expect(oid._random).toBeNull();
    expect(oid.getRandom()).toBe(input[1]);
    expect(oid._random).not.toBeNull();
  });

  test('getIndex', () => {
    const input = validOid453Inputs[0];
    const oid = new Oid(input[0]);
    expect(oid._index).toBeNull();
    expect(oid.getIndex()).toBe(input[1]);
    expect(oid._index).not.toBeNull();
  });

  test('toString', () => {
    const input = validOid453Inputs[0];
    const oid = new Oid(input[0]);
    expect(oid.toString()).toBe(input[0]);
  });
});