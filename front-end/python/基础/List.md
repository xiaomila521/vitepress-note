# List 列表

---

### 1. 列表的定义

```python
_list = ["java","python","javascript"]  # 第一种方式
list = list("java","c#","flutter") # 第二种方式
```

### 2. 定义空列表

```python
list1 = []
list2 = list()
```

### 3. 反向索引

```python
print(_list[-1])
```

### 4. 修改指定位置的元素

```paython
_list[0] = "go"
```

### 5. 列表常用的方法

**remove** 删除匹配到的第一个元素

```python
_list.remove("javascript")
```

**len** 获取列表的长度

```python
len(_list)
```

**index** 查找元素的下标

```python
_list.index("python")
```

**append** 添加元素

```python
_list.append("c#")
```

**clear** 清空列表

```python
_list.clear()
```

**count** 获取列表该指定元素的数量

```python
_list.count("flutter")
```

**insert** 在指定位置插入元素

```python
_list.insert(0,'c')
```

**extend** 将一个可迭代对象的所有元素添加到列表末尾

```python
_list.extend(["php","c++"])
```

**pop** 移除并返回指定位置的元素

```python
last_item = _list.pop()  # 移除并返回最后一个元素
item_at_index_0 = _list.pop(0) # 移除并返回索引为0处的元素
```

### 6. 列表的遍历

**for** 循环

```pyhton
for i in _list:
	print(i)
```

**range** 函数的使用

```python
for i in range(len(_list)):
	print(i) # i为元素的索引
	print(_list[i]) # 为元素
```

**enumerate** 同时获取元素对的索引和值

```python
for index,value in enumerate(_list):
	print(index,value)
```

**whine** 循环

```python
i = 0
whine i < len(_list):
	print(_list[i])
	i += 1

```

**map** 对每一个元素应用一个函数

```python
def print_item(x):
	print(x)


list(map(print_item,_list))
```

**fliter** 根据条件过滤列表中的元素

```python
list3 = [1,2,3,4,5,6]
filter_list = list(filter(lambda x:x > 4,list3))
```
