---
category: Components
toc: content # 在页面右侧展示锚点链接
title: Foo #自定义页面名称
order: 1 #控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: nav #自定义导航名称
  order: 1 #控制导航顺序，数字越小越靠前
group: # 分组
  title: example #自定义分组名称
  order: 1 #控制分组顺序，数字越小越靠前
---

# Foo

This is an example component.

```jsx
import { Foo } from 'dhooks';

export default () => <Foo title="Hello dumi!" />;
```
