import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink as Link } from 'react-router-dom'

import styles from './index.css'
// console.log(styles)

class UserLoggedOut extends Component {
  render() {
    return (
      <div className={styles.pageLoggedOut}>
        <div className={styles.header}>
          <p className={styles.login}>
            <Link to="/login-by-tel" style={{color: '#555'}}>注册 <span style={{color: '#000'}}>|</span> 登录</Link>
          </p>
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
            <Link to="/login-by-tel">注册</Link>
            <Link to="/login-by-tel">登录</Link>
          </div>
          <p className={styles.copyright}>Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
          <p className={styles.record}>
            <img className={styles.policeShield} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACWFBMVEUAAADnw3P/+cnYrn3ks2HeqFfu46v+/ODz6Kr//+P9/eXyzHnpx4udaFjx166xkHz387jz6ZL034vcp1nx38fQq3Ht3oDq2IP79NDkvFnTk3DZr4LKhFvDfz7r0pjbnFHpyF7jrFPnvGz488ns2Y3oxnzv2X/42oL+2I//74bktoDktoLjvGnfr2fhs2j/95fw1rvbrGLZqG3Rrnb9v1TbuofksVDVHhgAAXgBAW3gpUpvd4XNAAIDAmXluVzpx2PqyFzrwFfuzWbqvFrlv1LWjkbYkj7XPiD/0ljaSinklTj90Gj143Prv0/ruFDpwWDmt1femUTw1Gz1x1fltFvThT3UAwmwo2zdhTXcnUP/217+xVLysERaU2rJJxPTOCLQFg3XdTjQPynXYTHpgj79LA/yy27uXiP5oj+7ABDtcTDgbjbBvINtgpFzY2GUj4G7TCYAAIDu2HXouU/psUvorknuyFrpym3alkrvymE4FjfzfCjVdCjPLBrYnliRelnWMR+9kF7ooD3XkVNONU/8jiy5i1j/723twmL/2E2TYDY6EjnBDAvRDBGptJHNrFLWwHhODk7/vmDVaDLJWSpUOFMMAF1cX3hgHlDEGAqUd1zFUiSNhndCJETZAAbGPh2Ej5lMADnVSCrLPSFpAjaxDg4AG47dtmmBWDrEazOEaUrlYCOjfVKeXzAAEHriqVfgjkfKtnj/4mPy2HgXMInTZT18ennYzHfNwnHiRh42Gk2njVn2gjbTvIe1gD8ACJH6xESjmYSUjHXOeDrFrny0mVgcPpf/tUnV4jRxAAAANnRSTlMA6Uas5saACEIaJcOa+WnOAqu660EC4ZNc9BRIXZyM0vDkvFon++wwsr6xx+Db+TUc9eVvw5jVfch/AAABbklEQVQY02NggABOPn5+Pk4GZMDEzLt2xao1vMxMCDH2xqqulauzlod3t7HDxDi5W+qrw+I9bTL6pmpARbn0dsW2mpvXeib0TLKey6gCFtQ/VLg7PazBvDfeJj3Hco46SMzAJN9i38555u7u5jbu2y23aXIBBY0zDhYe3WMzxc1lQ0LWDst8DzagoKnXkf15BwrmT07Mdt2UZ5ETwwMUNIpIO2ZZkLJocXJS9lbbLZu9dIGChoeP51pkpibPTkxJzbTMjQ7VAQpqRXrvXbZw6cy4OM+kJes2epuBtGu7rfdeYGFrO3HGNFsL66gQK26goGpds1fahFnW4f3TY607miLN1ICCyi5WrjXBUZ3RMR7tHhGuZg4cINdLKLiEujk5mzk7BQVWlDOCxRhEWBzsAxwd/CudrQKC7IUhgkI+RXYhzmb+foFWdnZOPoKQ0BSXLA72LfErdSzztRdjE4AGqJSMLKu8Igurkpy0KIgPAF1iah19uh7QAAAAAElFTkSuQmCC" alt="police" />
            <span className={styles.recordNo}>粤公网安备 44010302000068号</span>
          </p>
        </div>
      </div>
    )
  }
}

export default UserLoggedOut