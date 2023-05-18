/**
 * title: Toggle between any two values
 * desc: Accept two optional parameters and toggle between them.
 *
 * title.zh-CN: 在任意两个值之间切换
 * desc.zh-CN: 接受两个可选参数，在它们之间进行切换。
 */

import { Button, useToggle } from 'dhooks';
import React from 'react';

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle(
    'Hello',
    'World',
  );

  return (
    <div>
      <p>Effects：{state}</p>
      <p>
        <Button type="primary" onClick={toggle}>
          Toggle
        </Button>
        <Button type="success" onClick={() => set('Hello')}>
          Set Hello
        </Button>
        <Button type="info" onClick={() => set('World')}>
          Set World
        </Button>
        <Button type="warning" onClick={setLeft}>
          Set Left
        </Button>
        <Button type="danger" onClick={setRight}>
          Set Right
        </Button>
      </p>
    </div>
  );
};
