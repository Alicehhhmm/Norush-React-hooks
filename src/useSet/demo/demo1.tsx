import { Button } from 'antd';
import { useSet } from 'norush-hooks';
import React from 'react';

export default () => {
  const [set, { add, remove, reset }] = useSet(['Hello']);

  return (
    <>
      <Button type="primary" onClick={() => add(String(Date.now()))}>
        Add Timestamp
      </Button>
      &nbsp;&nbsp;
      <Button
        type="default"
        onClick={() => remove('Hello')}
        disabled={!set.has('Hello')}
      >
        Remove Hello
      </Button>
      &nbsp;&nbsp;
      <Button type="default" onClick={() => reset()}>
        Reset
      </Button>
      <div>
        <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
      </div>
    </>
  );
};
