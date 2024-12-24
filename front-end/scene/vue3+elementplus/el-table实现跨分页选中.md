**@select、@selectAll**

```vue
<common-table
  ref="tableRef"
  v-loading="crud.loading"
  :data="crud.data"
  :data-format="columnsDataFormat"
  :empty-text="crud.emptyText"
  :max-height="maxHeight"
  row-key="id"
  style="width: 100%"
  @select="selectFun"
  @select-all="selectAllFun"
>
		 <el-table-column :reserve-selection="true" :selectable="selectable" align="center" type="selection" width="55" />
</common-table>
```

**selectFun**

> @select: 当用户手动勾选数据行的 Checkbox 时触发的事件  
> 触发后判断当前是否有再 selectedIds 维护数组中，如果有就删除，否则就添加进去

```javascript
function selectFun(selection, val) {
  const index = selectedIds.value.findIndex((item) => item.id === val.id)
  index !== -1
    ? selectedIds.value.splice(index, 1)
    : selectedIds.value.push(val)
}
```

**selectAllFun**

> **判断当前是否是全选**  
> 如果是的话，就去重追加，否则遍历当前列表中显示的数据从而拿到一个 id 组成的数组，再去 selectedIds 维护数组中过滤除 id 相同的 row 数据

```javascript
function selectAllFun(selection) {
  const isAllSelected = tableRef.value.$refs.tableRef.store.states.isAllSelected
  console.log(isAllSelected)
  if (isAllSelected.value) {
    // 选择了当前页的所有项
    selectedIds.value = Array.from(
      new Set([...selectedIds.value, ...selection])
    )
  } else {
    // 取消全选时，移除当前页的所有选中项
    const currentPageIds = crud.data.map((item) => item.id)
    selectedIds.value = selectedIds.value.filter(
      (selected) => !currentPageIds.includes(selected.id)
    )
  }
}
```

**回显**

> **toggleRowSelection**  
> **row 行数据**

```javascript
CRUD.HOOK.handleRefresh = (crud, { data: { content = [] } }) => {
  if (selectedIds.value?.length) {
    selectedIds.value.forEach((row) => {
      tableRef.value.$refs.tableRef?.toggleRowSelection(row, true)
    })
  }
}
```
