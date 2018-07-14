import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserLoggedIn extends Component {
  render() {
    return (
      <div className="page-user-logged-in">
        <div className="user-logged-in__header">
          <div className="header__user-photo">
            <img src="https://uploads.codesandbox.io/uploads/user/9538321b-4019-4f14-a472-0d3c163264d8/-s9t-14581158913884.png" />
          </div>
          <div className="header__badge">
            <img src="https://uploads.codesandbox.io/uploads/user/9538321b-4019-4f14-a472-0d3c163264d8/cUg9-1456308173711.png" />
            <p>铁牌会员</p>
          </div>
          <div className="header__tel-no">185****2149</div>
        </div>
        <div className="user-logged-in__main">
          <div className="main__order-info">
            <div className="order-info__unpaied">
              <div className="order-info__icon unpaied__icon">
                <FontAwesomeIcon icon="wallet" />
              </div>
              <p>待付款</p>
            </div>
            <div className="order-info__on-the-road">
              <div className="order-info__icon on-the-road__icon">
                <FontAwesomeIcon icon="truck" />
              </div>
              <p>待收货</p>
            </div>
            <div className="order-info__order-all">
              <div className="order-info__icon order-all__icon">
                <FontAwesomeIcon icon="list-alt" />
              </div>
              <p>全部订单</p>
            </div>
          </div>
          <ul>
            <li>我的收藏</li>
            <li>购物车历史</li>
            <li>浏览历史</li>
            <li>申请售后</li>
            <li>零钱</li>
            <li>唯品花</li>
            <li>优惠券</li>
            <li>我的唯品币</li>
            <li>收货地址</li>
            <li>修改登录密码</li>
            <li>管理支付密码</li>
            <li>绑定手机</li>
            <li>支付红包</li>
            <li>实名认证</li>
            <li>我的银行卡</li>
          </ul>
          <button className="login-button">退出登录</button>
        </div>
        {/* <img
          alt="user"
          src="https://uploads.codesandbox.io/uploads/user/9538321b-4019-4f14-a472-0d3c163264d8/hgUn-%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83.png"
        /> */}
      </div>
    )
  }
}

export default UserLoggedIn