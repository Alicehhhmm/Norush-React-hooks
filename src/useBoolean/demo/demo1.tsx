/**
 * title: Basic usage
 * desc: Toggle boolean, default value can be set optionally.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 切换 boolean，可以接收默认值。
 */

import { Button, useBoolean } from 'dhooks';
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
