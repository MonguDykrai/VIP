import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink as Link } from 'react-router-dom'
import { logOut } from '../../../actions'

import styles from './index.css'
// console.log(styles)

class UserLoggedIn extends Component {
  render() {
    const { logOut } = this.props
    return (
      <div className={styles.pageLoggedIn}>
        <div className={styles.header}>
          <div className={styles.userPhoto}>
            <img src="https://uploads.codesandbox.io/uploads/user/9538321b-4019-4f14-a472-0d3c163264d8/-s9t-14581158913884.png" />
          </div>
          <div className={styles.badge}>
            <img src="https://uploads.codesandbox.io/uploads/user/9538321b-4019-4f14-a472-0d3c163264d8/cUg9-1456308173711.png" />
            <p>铁牌会员</p>
          </div>
          <div className={styles.telNo}>185****2149</div>
        </div>
        <div className={styles.main}>
          <div className={styles.orderInfo}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon="wallet" />
              </div>
              <p>待付款</p>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon="truck" />
              </div>
              <p>待收货</p>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon="list-alt" />
              </div>
              <p>全部订单</p>
            </div>
          </div>
          <ul className={styles.menu}>
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
          <button className={styles.btnLogout} onClick={logOut}>退出登录</button>
        </div>
        <div className={styles.footer}>
          <div className={styles.download}>
            <p className={styles.vip}>唯品会</p>
            <p className={styles.slogen}>唯品会客户端，特卖抢不停</p>
            <button className={styles.btnDownload}>下载</button>
          </div>
          <div className={styles.about}>
            <Link to="/">唯品会首页</Link>
            <Link to="/">关于我们</Link>
            <Link to="/user">个人中心</Link>
          </div>
          <p className={styles.copyright}>Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
          <p className={styles.record}>
            <img className={styles.policeShield} src="https://uploads.codesandbox.io/uploads/user/9538321b-4019-4f14-a472-0d3c163264d8/o_3v-police.png" alt="police" />
            <span className={styles.recordNo}>粤公网安备 44010302000068号</span>
          </p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logOut }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserLoggedIn)