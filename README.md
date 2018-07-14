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

https://github.com/supnate/react-geek-time/blob/master/src/c12/Counter.js
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

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

```js
const initialState = {
  hideDownloadBanner: false,
  loggedIn: Boolean(localStorage.loggedIn)
}

localStorage.setItem('loggedIn', 'true')
```

what's next

写 user 页面
2018年7月14日15:36:01

写后台逻辑 JWT
2018年7月13日07:08:46
先通过前端模拟
2018年7月14日14:51:52

## 遇到的问题

样式命名冲突（首要解决！！！！）
如何解决？

<https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e>