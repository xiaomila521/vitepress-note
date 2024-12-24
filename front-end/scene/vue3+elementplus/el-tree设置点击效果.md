> render-content 通过该属性自定渲染内容

```vue
<el-tree
  ref="treeRef"
  v-model="crud.query.areaId"
  :data="regionList"
  :filter-node-method="filterNode"
  :props="defaultProps"
  :render-content="renderNodeContent"
  check-on-click-node
  class="filter-tree"
  default-expand-all
  node-key="id"
  @node-click="nodeClick"
/>
```

**nodeClick**

> selectedNodeId 保存上一次点击的值

```javascript
const selectedNodeId = ref()
async function nodeClick(event, node) {
  // 过滤父节点
  if (!event.hasOwnProperty("type")) return
  // 检查当前点击的节点是否已经是选中状态
  if (selectedNodeId.value === event.id) {
    // 如果已经是选中状态，取消选中
    selectedNodeId.value = null
  } else {
    // 否则，设置当前节点为选中状态
    selectedNodeId.value = event.id
  }
  await handleChange(
    { areaId: selectedNodeId.value ? event.id : undefined },
    () => {
      selectedNodeId.value = null
    }
  )
}
```

**renderNodeContent**

```javascript
function renderNodeContent(h, { node, data, store }) {
  return h(
    "div",
    {
      class: {
        "selected-node": selectedNodeId.value === data.id
      }
    },
    data.name
  )
}
```

**css**

```css
:deep(.el-tree) {
  .el-tree-node__children {
    .selected-node {
      background-color: #f0f7ff !important;
      color: #409eff !important;
      font-weight: bold !important;
      transition: all 0.2s ease-out !important;
      //width: 100%;
      transform: scale(1.1) translateX(-10px);
    }

    .el-tree-node .el-tree-node__content:hover {
      background-color: #f0f7ff !important;
      //transform: scale(1.1);
      font-weight: bold;
      transition: all 0.2s ease-out;
    }

    .el-tree-node:focus > .el-tree-node__content {
      background: transparent !important;
    }
  }
}
```
