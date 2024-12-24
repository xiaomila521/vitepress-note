**标签中实现变量（--radio-xxx）**

> **:style={'--radio-color'}**

```vue
<common-radio
  v-model="downloadType"
  :options="options"
  :style="{ '--radio-color': '#e6a23c' }"
  type="other"
/>
```

> **编写对应的 css**

```css
:deep(.el-radio) {
  height: 32px;
  //margin-right: 20px;

  .el-radio__inner {
    border: 1px solid var(--radio-color);
  }

  .el-radio__label {
    font-size: 12px;
  }
}

:deep(.el-radio.is-checked) {
  .el-radio__label {
    color: var(--radio-color);
  }

  .el-radio__inner {
    background: var(--radio-color);
  }
}
```
