'use strict';

const {Oid453} = require('../../src');
const {createTimestamp} = require('../../src/utils');
const {validOid453Inputs, invalidOid453Inputs} = require('./resources');

describe('Oid453', () => {
  test('create(void)', () => {
    const t = createTimestamp();
    const oid = Oid453.create();
    expect(oid.getTimestamp()).toBeGreaterThanOrEqual(t);
  });

  test('out of timestamp', () => {
    const oid = Oid453.create(0xffffffff + 1);
    expect(oid.getTimestamp()).toBe(0);
  });

  test('valid inputs', () => {
    for (const input of validOid453Inputs){
      const oid1 = Oid453.create(input[0]);
      expect(oid1.getId()).toBe(input[0]);
      expect(oid1.getTimestamp()).toBe(input[1]);
      expect(oid1.getRandom()).toBe(input[2]);
      expect(oid1.getIndex()).toBe(input[3]);
      expect(oid1.toString()).toBe(input[0]);

      const oid2 = Oid453.create(oid1);
      expect(oid2.getId()).toBe(oid1.getId());
      expect(oid2.getTimestamp()).toBe(oid1.getTimestamp());
      expect(oid2.getRandom()).toBe(oid1.getRandom());
      expect(oid2.getIndex()).toBe(oid1.getIndex());
      expect(oid2.toString()).toBe(oid1.toString());

      const oid3 = Oid453.create(input[1]);
      expect(oid3.getTimestamp()).toBe(input[1]);
    }
  });

  test('invalid inputs', () => {
    for (const input of invalidOid453Inputs){
      const test = () => Oid453.create(input);
      expect(test).toThrow(TypeError);
    }
  });
});