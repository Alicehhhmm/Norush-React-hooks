---
category: Components
toc: content # 在页面右侧展示锚点链接
title: Button #组件的标题，会在菜单侧边栏展示
order: 2 #控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
group: # 分组
  title: example #自定义分组名称
  order: 10 #控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
---

# Button 按钮

​

## 介绍

​
基础的按钮组件 Button。
​

## 示例

​

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/demo1.tsx">基础用法</code>
​

## APi

```typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);
```

### Params

| 参数         | 说明                     | 类型      | 默认值  |
| ------------ | ------------------------ | --------- | ------- |
| defaultValue | 可选项，传入默认的状态值 | `boolean` | `false` |

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | 状态值   | `boolean` |
| actions | 操作集合 | `Actions` |

### Actions

| 参数     | 说明         | 类型                       |
| -------- | ------------ | -------------------------- |
| toggle   | 切换 state   | `() => void`               |
| set      | 设置 state   | `(value: boolean) => void` |
| setTrue  | 设置为 true  | `() => void`               |
| setFalse | 设置为 false | `() => void`               |
