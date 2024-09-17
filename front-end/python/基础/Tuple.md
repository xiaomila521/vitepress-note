# Tuple

> 是多个元素的集合,但是**不能修改**,区别于列表

---

### 1. 元祖的定义

```python
_tuple = ("java","javascript","python")
print(_tuple,type(_tuple))
```

> 注意 如果元祖中只有一个元素的话,那么 type(\_tuple)的类型是字符串,只需要在最后一个元素后加一个逗号,就恢复为元祖类型了
>
> \_t1 = ("java",)

### 2. 空元祖的定义

```python
t1 = ()
t2 = tuple()
```

### 3. 元祖里面元素类型没有限制

```python
t5 = (1,"22",3.14,True)
```

### 4. 元祖里面可以嵌套元祖

```python
t6 = ((1,2,3),(4,5,6))
```

### 5. 元祖的常用方法

下标索引用法和列表一样,但是不能修改值

```python
t1 = ("java","python","c")
print(t1[0])  # java
print(t1[-1]) # c
```

**index** 查找元祖中符合匹配条件的第一个元素的索引,不存在就报错

```python
print(t1.index("java"))
```

**count** 查找元祖匹配到元素的数量

```python
t1 = ("java","python","flutter","python")
print(t1.count("python"))
```

**len** 元祖的长度

```python
print(len(t1))
```

### 6. 元祖的遍历

**for** 循环

```python
for i in t1:
	print(i)
```

**whine** 循环

```python
i = 0
whine i < len(t1):
	print(t1[i])
	i += 1
```
