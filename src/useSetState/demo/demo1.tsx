/**
 * title: Default usage
 * desc: Automatically merge object.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 自动合并对象。
 */

import { Button, useSetState } from 'norush-hooks';
import React from 'react';

interface State {
  hello: string;
  [key: string]: any;
}

export default () => {
  const [state, setState] = useSetState<State>({
    hello: '',
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <Button type="primary" onClick={() => setState({ hello: 'world' })}>
          set hello
        </Button>
        <Button type="success" onClick={() => setState({ foo: 'bar' })}>
          set foo
        </Button>
      </p>
    </div>
  );
};
