# oid-node
[![NPM Version](https://img.shields.io/npm/v/@y0x54a/oid-node)](https://www.npmjs.com/package/@y0x54a/oid-node)
[![Build Status](https://github.com/y0x54a/oid-node/workflows/ci/badge.svg?branch=main)](https://github.com/y0x54a/oid-node/actions)
[![codecov](https://codecov.io/gh/y0x54a/oid-node/branch/main/graph/badge.svg?token=58AFJJERGB)](https://codecov.io/gh/y0x54a/oid-node)

## Installing
```sh
npm i @y0x54a/oid-node
```

## Example
```js
const {Oid453, Oid563} = require('@y0x54a/oid-node');
```

```js
Oid453.create();
// 12-byte

Oid563.create();
// 14-byte
```

```js
const oid = new Oid453('00112233445566778899aabb');

oid.getId();
// 00112233445566778899aabb

oid.getTimestamp();
// 1122867

oid.getRandom();
// 293490554760

oid.getIndex();
// 10070715

oid.toString();
// 00112233445566778899aabb

Oid453.validate(oid);
// true

Oid453.validate(oid.getId());
// true

Oid453.validate('00112233445566778899AABB');
// false

Oid563.validate(oid);
// false
```

```js
const oid1 = Oid453.create(1122867);
const oid2 = Oid453.create(oid1);

oid1.getId() === oid2.getId();
// true

oid1.getTimestamp();
// 1122867

oid2.getTimestamp();
// 1122867

Oid453.generate(1122867);
// 00112233...
```

```js
const oid = new Oid563('00112233445566778899aabbccdd');

oid.getId();
// 00112233445566778899aabbccdd

oid.getTimestamp();
// 287454020

oid.getRandom();
// 93898580466090

oid.getIndex();
// 12307677

oid.toString();
// 00112233445566778899aabbccdd

Oid563.validate(oid);
// true

Oid563.validate(oid.getId());
// true

Oid563.validate('00112233445566778899AABBCCDD');
// false

Oid453.validate(oid);
// false
```

```js
const oid1 = Oid563.create(287454020);
const oid2 = Oid563.create(oid1);

oid1.getId() === oid2.getId();
// true

oid1.getTimestamp();
// 287454020

oid2.getTimestamp();
// 287454020

Oid563.generate(287454020);
// 0011223344...
```

## API

- ### Oid

- ### Oid453

  - **Methods**

  - `constructor(id: string | Oid)`

  - `getId(): string`

  - `getTimestamp(): number`

  - `getRandom(): number`

  - `getIndex(): number`

  - `toString(): string`

  - **Static Methods**

  - `create(id?: string | Oid | number): Oid453`

  - `validate(id: string | Oid): boolean`

  - `generate(timestamp: number): string`

- ### Oid563

  - **Methods**

  - `constructor(id: string | Oid)`

  - `getId(): string`

  - `getTimestamp(): number`

  - `getRandom(): number`

  - `getIndex(): number`

  - `toString(): string`

  - **Static Methods**

  - `create(id?: string | Oid | number): Oid563`

  - `validate(id: string | Oid): boolean`

  - `generate(timestamp: number): string`