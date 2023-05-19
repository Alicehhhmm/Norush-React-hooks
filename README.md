<p align="center">
  <a href="https://www.npmjs.com/package/norush-hooks?activeTab=readme">
    <img width="200" src="/public/logo.svg">
  </a>
</p>
<div align="center">
    <a href="https://www.npmjs.com/package/norush-hooks?activeTab=readme">
     <h1>norush-hooks</h1>
  </a>
</div>

[![NPM version](https://img.shields.io/npm/v/norush-hooks.svg?style=flat)](https://npmjs.org/package/norush-hooks)
[![NPM downloads](http://img.shields.io/npm/dm/norush-hooks.svg?style=flat)](https://npmjs.org/package/norush-hooks)

## 📦 安装

```bash
$ npm install --save norush-hooks
# or
$ yarn add norush-hooks
```

## 📚 Development

```bash
# install dependencies
$ npm install

# enable peoject
$ npm start
# or
$ npm run dev

```

## 🔨 Usage

```ts
import { Button, useBoolean } from 'norush-hooks';
import React from 'react';

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

  return (
    <div>
      <p>Effects：{JSON.stringify(state)}</p>
      <p>
        <Button type="primary" onClick={toggle}>
          Toggle
        </Button>
        <Button type="success" onClick={setFalse}>
          Set false
        </Button>
        <Button type="info" onClick={setTrue}>
          Set true
        </Button>
      </p>
    </div>
  );
};
```

## LICENSE

MIT Copyright (c) 2023-05-20 Norush
