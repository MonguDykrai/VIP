# README

## react-router-dom

```js
import { NavLink as Link } from 'react-router-dom';
```

## history.push

```js
componentDidMount() {
  console.log(this.props);
  this.props.history.push(this.props.location.pathname);
}

// https://www.youtube.com/watch?v=l9eyot_IXLY
```

## i 标签是行内元素

## React-router-dom —— Switch

<Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively.

```js
<Switch>
  <Route path="/login" component={Login} />
  <Route path="/" component={Home} />
</Switch>
```

<https://github.com/supnate/react-geek-time/blob/master/src/c12/Counter.js>
如何组织 actions 和 reducers

利用 redux 做状态管理

是否 显示 downloadBanner 的值的传递利用 redux 进行管理

需要先解决如何组织 redux 的问题

## React Router —— Redirect

<https://reacttraining.com/react-router/web/api/Redirect>

```js
import { Route, Redirect } from 'react-router-dom'

<Route
  path="/login-by-tel"
  render={() => (loggedIn ? <Redirect to="/" /> : <LoginByTel />)}
/>
// The new location will override the current location in the history stack, （不需要手动 push）
// like server-side redirects (HTTP 3xx) do.
```

## 页面刷新后登陆状态丢失

将登陆状态存在 localStorage 中

<https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>

```js
const initialState = {
  hideDownloadBanner: false,
  loggedIn: Boolean(localStorage.loggedIn)
}

localStorage.setItem('loggedIn', 'true')
```

## local style

如何使用局部样式？

PostCSS入门教程
<http://www.w3cplus.com/blog/tags/516.html>

CSS Modules in React and Webpack Tutorial
<https://www.youtube.com/watch?v=u9LBSeeJzXc>
<https://github.com/css-modules/css-modules>

PostCSS ( react脚手架中有配置 )
<https://github.com/postcss/postcss>
<https://postcss.org/>

Rucksack ( A little bag of CSS superpowers )
<https://www.rucksackcss.org/>

css-loader
<https://github.com/webpack-contrib/css-loader>

PostCSS真的太好用了！
<https://www.rucksackcss.org/>

```css
/* ./src/components/Greeting/index.css */
:local(.red) { color: red; }

/*
 * When declaring a local classname you can
 * compose a local class from another local classname.
 * <https://github.com/webpack-contrib/css-loader>
 */
:local(.green) {
  composes: red;
  color: green;
}

:local(.btnGoodbye) {
  composes: bye hi from '../Goodbye/index.css';
  color: crimson;
}

:local(h2) {
  color: chocolate;
}

.blue {
  color: blue;
}

/* styles.css */
.App {
  font-family: sans-serif;
  text-align: center;
}
```

## 样式嵌套

### 1. 安装 precss

> npm install precss --save-dev

### 2. 配置 webpack

```js
{
  loader: require.resolve('postcss-loader'),
  options: {
    plugins: () => [
      require('precss'),
    ],
  },
},
```

### 3. 使用

```css
:local(.search-history) {
  width: 100%;
  height: 3.2rem;
  padding: 0 .4rem;

  /* 配置后支持样式嵌套 */
  & > p {
    height: .6rem;
    background-color: crimson;
  }
}
```

<https://www.npmjs.com/package/precss>

## ul 没高解决方案

将 li 的 display 值设置为 inline-block

```css
:local(.quick-entry > ul > li) {
  display: inline-block;
  width: 20%;

  & img {
    width: 100%;
  }
}
```

what's next

写后台逻辑 JWT
2018年7月13日07:08:46
先通过前端模拟
2018年7月14日14:51:52

○ 优化样式文件
2018年7月22日11:56:57