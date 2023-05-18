import { useCallback, useState } from 'react';
import { isFunction } from '../utils';

// void - 用于声明函数的返回值
// Record : 构造一个对象类型，其属性键为keys，属性值为type。此实用程序可用于将一个类型的属性映射到另一个类型。
// Pick<Type,keys>: 通过从type中选取一组属性Keys(字符串字面值或字符串字面值的并集)来构造一个类型。
export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state:
    | Pick<S, K>
    | null
    | ((prevState: Readonly<S>) => Pick<S, K> | S | null),
) => void;

const useSetState = <S extends Record<string, any>>(
  initialState: S | (() => S),
): [S, SetState<S>] => {
  const [state, setState] = useState<S>(initialState);

  const setMergeState = useCallback((patch: any) => {
    setState((prevState) => {
      const newState = isFunction(patch) ? patch(prevState) : patch;
      return newState ? { ...prevState, ...newState } : prevState;
    });
  }, []);

  return [state, setMergeState];
};

export default useSetState;
