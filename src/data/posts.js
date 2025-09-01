export const mockPosts = [
  {
    id: 1,
    title: "React Hooks 入门指南",
    content: `React Hooks 是 React 16.8 引入的新特性，它让我们能够在函数组件中使用状态和其他 React 特性。

## 什么是 Hooks

Hooks 是一些可以让你在函数组件里"钩入" React state 及生命周期等特性的函数。它们让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## useState Hook

useState 是最常用的 Hook，它让函数组件拥有状态：

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击我
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

useEffect 让你能够在函数组件中执行副作用操作：

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>计时器: {seconds} 秒</div>;
}
\`\`\``,
    summary: "深入了解 React Hooks 的基本用法和最佳实践",
    author: "admin",
    createdAt: "2024-08-26T14:54:21",
    updatedAt: "2024-08-26T14:54:21",
    status: "PUBLISHED"
  },
  {
    id: 2,
    title: "JavaScript ES6+ 新特性详解",
    content: `ES6+ 为 JavaScript 带来了许多强大的新特性，让我们的代码更加简洁和高效。

## 箭头函数

箭头函数提供了更简洁的函数语法：

\`\`\`javascript
// 传统函数
function add(a, b) {
  return a + b;
}

// 箭头函数
const add = (a, b) => a + b;
\`\`\`

## 解构赋值

解构赋值让我们能够从数组或对象中提取值：

\`\`\`javascript
// 数组解构
const [first, second] = [1, 2, 3];

// 对象解构
const { name, age } = { name: 'John', age: 30 };
\`\`\`

## 模板字符串

模板字符串让字符串拼接变得更加简单：

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!\`;
\`\`\``,
    summary: "掌握 ES6+ 的核心特性，提升 JavaScript 开发效率",
    author: "admin",
    createdAt: "2024-08-25T10:30:15",
    updatedAt: "2024-08-25T10:30:15",
    status: "PUBLISHED"
  },
  {
    id: 3,
    title: "CSS Grid 布局完全指南",
    content: `CSS Grid 是一个强大的二维布局系统，能够同时控制行和列的布局。

## 基本概念

Grid 布局将容器分为行和列，形成一个网格，然后将子元素放置在网格中。

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}
\`\`\`

## 网格项目定位

你可以精确控制每个网格项目的位置：

\`\`\`css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
\`\`\`

## 响应式网格

结合媒体查询，Grid 可以创建完美的响应式布局：

\`\`\`css
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
\`\`\``,
    summary: "全面掌握 CSS Grid 布局，创建现代响应式网页",
    author: "admin",
    createdAt: "2024-08-24T16:20:30",
    updatedAt: "2024-08-24T16:20:30",
    status: "PUBLISHED"
  },
  {
    id: 4,
    title: "Node.js 异步编程最佳实践",
    content: `Node.js 的异步特性是其最大的优势之一，理解和正确使用异步编程模式至关重要。

## Promises

Promise 是处理异步操作的现代方式：

\`\`\`javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('数据获取成功');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## Async/Await

async/await 让异步代码看起来像同步代码：

\`\`\`javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## 错误处理

正确的错误处理是异步编程的关键：

\`\`\`javascript
process.on('unhandledRejection', (reason, promise) => {
  console.log('未处理的 Promise 拒绝:', reason);
});
\`\`\``,
    summary: "掌握 Node.js 异步编程，构建高性能后端应用",
    author: "admin",
    createdAt: "2024-08-23T09:15:45",
    updatedAt: "2024-08-23T09:15:45",
    status: "PUBLISHED"
  },
  {
    id: 5,
    title: "前端性能优化策略",
    content: `前端性能优化是提升用户体验的关键，让我们看看一些有效的优化策略。

## 代码分割

使用动态导入实现代码分割：

\`\`\`javascript
// 懒加载组件
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## 图片优化

- 使用 WebP 格式
- 实现图片懒加载
- 响应式图片

\`\`\`html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="描述" loading="lazy">
</picture>
\`\`\`

## 缓存策略

合理使用浏览器缓存：

\`\`\`javascript
// Service Worker 缓存
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
\`\`\``,
    summary: "全面的前端性能优化技巧，提升网站加载速度",
    author: "admin",
    createdAt: "2024-08-22T14:45:20",
    updatedAt: "2024-08-22T14:45:20",
    status: "PUBLISHED"
  },
  {
    id: 6,
    title: "数据库设计原则与实践",
    content: `良好的数据库设计是应用程序成功的基础，让我们了解一些核心原则。

## 范式化

第一范式（1NF）要求每个字段都是原子性的：

\`\`\`sql
-- 不符合 1NF
CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  phones VARCHAR(500) -- 包含多个电话号码
);

-- 符合 1NF
CREATE TABLE users (
  id INT,
  name VARCHAR(100)
);

CREATE TABLE user_phones (
  user_id INT,
  phone VARCHAR(20)
);
\`\`\`

## 索引优化

合理使用索引提升查询性能：

\`\`\`sql
-- 为常用查询字段创建索引
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_article_status ON articles(status, created_at);
\`\`\`

## 查询优化

避免 N+1 查询问题：

\`\`\`sql
-- 不好的方式：N+1 查询
SELECT * FROM articles;
-- 然后为每篇文章查询作者
SELECT * FROM users WHERE id = ?;

-- 好的方式：JOIN 查询
SELECT a.*, u.name as author_name 
FROM articles a 
JOIN users u ON a.author_id = u.id;
\`\`\``,
    summary: "数据库设计的核心原则和最佳实践",
    author: "admin",
    createdAt: "2024-08-21T11:30:10",
    updatedAt: "2024-08-21T11:30:10",
    status: "PUBLISHED"
  }
];

export const mockGuestbookEntries = [
  {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com",
    message: "很棒的博客！学到了很多关于 React 的知识。",
    createdAt: "2024-08-27T10:30:00",
    approved: true
  },
  {
    id: 2,
    name: "李四",
    email: "lisi@example.com", 
    message: "前端性能优化那篇文章写得特别好，已经在项目中应用了！",
    createdAt: "2024-08-26T14:20:00",
    approved: true
  },
  {
    id: 3,
    name: "王五",
    email: "wangwu@example.com",
    message: "希望能多写一些关于 TypeScript 的文章。",
    createdAt: "2024-08-25T09:15:00",
    approved: true
  },
  {
    id: 4,
    name: "赵六",
    email: "zhaoliu@example.com",
    message: "Git 工作流程的介绍很实用，我们团队准备采用这套流程。",
    createdAt: "2024-08-24T16:45:00",
    approved: true
  },
  {
    id: 5,
    name: "钱七",
    email: "qianqi@example.com",
    message: "作为一个后端开发者，CSS Grid 的文章让我对前端有了新的认识！",
    createdAt: "2024-08-23T11:30:00",
    approved: true
  }
];

export const mockUserStats = {
  totalPosts: mockPosts.length,
  publishedPosts: mockPosts.filter(post => post.status === 'PUBLISHED').length,
  draftPosts: mockPosts.filter(post => post.status === 'DRAFT').length,
  totalViews: 15420,
  totalComments: 89
};
