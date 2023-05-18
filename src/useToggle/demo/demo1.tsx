/**
 * title: Basic usage
 * desc: Default value is boolean，alike useBoolean.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 默认为 boolean 切换，基础用法与 useBoolean 一致。
 */

import { Button, useToggle } from 'dhooks';
import React from 'react';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  return (
    <div>
      <p>Effects：{`${state}`}</p>
      <p>
        <Button type="primary" onClick={toggle}>
          Toggle
        </Button>
        <Button type="success" onClick={setLeft}>
          Toggle False
        </Button>
        <Button type="danger" onClick={setRight}>
          Toggle True
        </Button>
      </p>
    </div>
  );
};
