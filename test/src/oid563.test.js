'use strict';

const {Oid563} = require('../../src');
const {createTimestamp} = require('../../src/utils');
const {validOid563Inputs, invalidOid563Inputs} = require('./resources');

describe('Oid453', () => {
  test('create(void)', () => {
    const t = createTimestamp();
    const oid = Oid563.create();
    expect(oid.getTimestamp()).toBeGreaterThanOrEqual(t);
  });

  test('out of timestamp', () => {
    const oid = Oid563.create(0xffffffffff + 1);
    expect(oid.getTimestamp()).toBe(0);
  });

  test('valid inputs', () => {
    for (const input of validOid563Inputs){
      const oid1 = Oid563.create(input[0]);
      expect(oid1.getId()).toBe(input[0]);
      expect(oid1.getTimestamp()).toBe(input[1]);
      expect(oid1.getRandom()).toBe(input[2]);
      expect(oid1.getIndex()).toBe(input[3]);
      expect(oid1.toString()).toBe(input[0]);

      const oid2 = Oid563.create(oid1);
      expect(oid2.getId()).toBe(oid1.getId());
      expect(oid2.getTimestamp()).toBe(oid1.getTimestamp());
      expect(oid2.getRandom()).toBe(oid1.getRandom());
      expect(oid2.getIndex()).toBe(oid1.getIndex());
      expect(oid2.toString()).toBe(oid1.toString());

      const oid3 = Oid563.create(input[1]);
      expect(oid3.getTimestamp()).toBe(input[1]);
    }
  });

  test('invalid inputs', () => {
    for (const input of invalidOid563Inputs){
      const test = () => Oid563.create(input);
      expect(test).toThrow(TypeError);
    }
  });
});