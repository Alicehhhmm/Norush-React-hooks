/**
 * title: useMemoizedFn function reference will not change, which can be used for performance optimization.
 * desc: In the example, `memoizedFn` reference will not change, `callbackFn` will change when count changes.
 *
 * title.zh-CN: useMemoizedFn 函数地址不会变化，可以用于性能优化
 * desc.zh-CN: 示例中 `memoizedFn` 是不会变化的，`callbackFn` 在 count 变化时变化。
 */

import { Button, message } from 'antd';
import { useMemoizedFn } from 'norush-hooks';
import React, { useCallback, useRef, useState } from 'react';

// some expensive component with React.memo
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div>
      <p>Render Count: {renderCountRef.current}</p>
      <Button type="default" onClick={showCount}>
        showParentCount
      </Button>
    </div>
  );
});

export default () => {
  const [count, setCount] = useState(0);

  const callbackFn = useCallback(() => {
    message.info(`Current count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    message.info(`Current count is ${count}`);
  });

  return (
    <>
      <p>count: {count}</p>
      <Button
        type="primary"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </Button>

      <p>您可以单击该按钮查看子组件呈现的数量</p>

      <div style={{ marginTop: 32 }}>
        <h3>带有useCallback函数的组件:</h3>
        {/* use callback function, ExpensiveTree component will re-render on state change */}
        <ExpensiveTree showCount={callbackFn} />
      </div>

      <div style={{ marginTop: 32 }}>
        <h3>带有useMemoizedFn函数的组件:</h3>
        {/* use memoized function, ExpensiveTree component will only render once */}
        <ExpensiveTree showCount={memoizedFn} />
      </div>
    </>
  );
};
