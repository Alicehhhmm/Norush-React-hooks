import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';

// iterable : 可迭代
// Set : 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
// Set.has() 方法返回一个布尔值来指示对应的值是否存在于 Set 对象中。
function useSet<K>(initialValue?: Iterable<K>) {
  const getInitValue = () => new Set(initialValue);
  const [set, setSet] = useState(getInitValue);

  const add = (key: K) => {
    if (set.has(key)) {
      return;
    }
    setSet((prevSet) => {
      const temp = new Set(prevSet);
      temp.add(key);
      return temp;
    });
  };

  const remove = (key: K) => {
    if (!set.has(key)) {
      return;
    }
    setSet((prevSet) => {
      const temp = new Set(prevSet);
      temp.delete(key);
      return temp;
    });
  };

  const reset = () => setSet(getInitValue());

  return [
    set,
    {
      add: useMemoizedFn(add),
      remove: useMemoizedFn(remove),
      reset: useMemoizedFn(reset),
    },
  ] as const;
}

export default useSet;
