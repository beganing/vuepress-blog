---
title: 3. 简单 SQL
date: 2024/09/14
tags:
  - PostGIS
categories:
  - WebGIS
---

- `SELECT`，返回对查询的响应中的行
- `INSERT`，向表中添加新行
- `UPDATE`，修改表中现有的行
- `DELETE`，从表中删除行

## 3.1. 函数列表

| 函数名                                                       | 类型                 | 返回值                   |
| ------------------------------------------------------------ | -------------------- | ------------------------ |
| [avg(expression)](http://www.postgresql.org/docs/current/static/functions-aggregate.html#FUNCTIONS-AGGREGATE-TABLE) | PostgreSQL聚合函数   | 返回数值列的平均值       |
| [char_length(string)](http://www.postgresql.org/docs/current/static/functions-string.html) | PostgreSQL字符串函数 | 返回字符串中的字符数     |
| [stddev(expression)](http://www.postgresql.org/docs/current/static/functions-aggregate.html#FUNCTIONS-AGGREGATE-STATISTICS-TABLE) | PostgreSQL聚合函数   | 返回输入值的标准差       |
| [count(expression)](http://www.postgresql.org/docs/current/static/functions-aggregate.html#FUNCTIONS-AGGREGATE-TABLE) | PostgreSQL聚合函数   | 返回一组记录中记录数量   |
| [sum(expression)](http://www.postgresql.org/docs/current/static/functions-aggregate.html#FUNCTIONS-AGGREGATE-TABLE) | PostgreSQL 聚合函数  | 返回一组记录中的记录总和 |

## 3.2. SELECT

> 查询

```sql
SELECT some_columns FROM some_data_source WHERE some_condition;
```

`some_columns` 可以是列名或列值的函数。 `some_data_source` 可以是单个表，也可以是通过在关键列上或根据条件连接两个表创建的复合表。 `some_condition` 是一个过滤器，用于限制要返回的行数。

> 示例-布鲁克林的所有社区的名称是什么？

```sql
SELECT name 
  FROM nyc_neighborhoods
  WHERE boroname = 'Brooklyn';
```

> 字符串长度函数-`char_length()`
> 
> 示例-布鲁克林所有社区的名称中有多少个字母？

```sql
SELECT char_length(name) 
  FROM nyc_neighborhoods
  WHERE boroname = 'Brooklyn';
```

> 聚合函数
> 
> - 计算平均值的通用函数:command:`avg()`
> - 计算标准差的函数:command:`stddev()`

> 示例-布鲁克林所有社区名称中字母的平均数量和标准偏差是多少？

```sql
SELECT avg(char_length(name)), stddev(char_length(name))
  FROM nyc_neighborhoods
  WHERE boroname = 'Brooklyn';
```

> 分组-`GROUP BY`
> 
> 在输出结果中包含了`boroname`列，这样我们就可以确定哪个统计数据适用于哪个`boroname`
> 
> 示例-纽约市所有社区名称的平均字母数，按行政区划报告？

```sql
SELECT boroname, avg(char_length(name)), stddev(char_length(name))
  FROM nyc_neighborhoods
  GROUP BY boroname;
```