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
            <img alt="vip" src="data:image/png;base64,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" />
          </div>
          <div className={styles.badge}>
            <img alt="badge" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAXNSR0IArs4c6QAAA6NJREFUWMPtl0toE0EYxxUF8QEW9WTxouJB8CBWKoIHQRFvHkQPVVC8qPiiFZGCWB+gKCQ+KCqiUA/SVq1VfExeTfqIbZo2jTVpbW3rzG6sImLFg2/8y8xs0k2yu9m0xVPng2V3mP39v/3mm29mp0yZbJPtv7WRAracbWA7lC1q8btFmD5hYExVipQzrJsizb6yWloyUjBuPNtIIxlonbFv7Pw4RBLLmCeJGkIMnQghiDaEEUXfqMhndnhMeGUTHZGIOFrgBgGBGz74tPsGhDGYFKkZnpVvaA6zP/zVXjSBwIMgIuhBr2YxdKAZLrjRiSEpElEW5oPfKT3rEl6HEE+h9RZDEC4EMKBJ2P6KxBr6g7/SCgI/YobwpL2EF15tRth9TLWB/zyXvufDwyBotoRLi6MBXu0rlDI74TnHh3aDIGAD34uomPQA3nKJL4n5OfBqIftGMQgPfCaRN8Jz65Bhcuby/zIf1g6CSF54ngwiTD+HF1iWBZagGIAL/hSkBg444NQlKbdKOHARlSk8t7Cch91Wi6uID3mZ5r8Xe4U16vBhre92moBPBumRVYBO8SF8Cen9PSFgt3Q91aLnCJ6nCRC8FvUJM0wF6F0u4E7zthf3BO64rqdC9Dgz8ARdMkhLzAUCvKwRBDMW00EBTKZts3jah4dZAu1SYJ15iPop+kHQlpEtlQJ5Xcucq+KpIgtP8EIKbDcXUClegyCUIdAkkGXoEYl5TDxVGQgEpcAuc4F2nqQErVkZf1JAn8CNWnFXmjXBRHy5ENhkLlDPB7jQkiXwQGDPgcAh7q4Y4Ak6hYC6wnySK/kAP3xZAq9wCHtxAM9QKia43lAgJgXmmX/B1mQdfZVVFC4Izy+J62lDvEsWvKjFQvs4h+8E2dMcTcV+v7jeMRRokSu5wrrYPeGDGuHR1dJkSSvXCkSZIZ4gLgTerbQu15vlTjyaSaMV85om4LTyP5h7w/HJ7dKFroyC/BhVwuoN498vd+a1uQVWsb+8YATgRocOb23dEl9na9OnZ/ngN/DahKd2s2G10OZplNbxFwYQsAF3ISq9/66stn0u+jCbheSBMZQD34Ae6f1vti2vk506k1XLw1cfWkzgHnTJpQX2KbF+LKfTcvpLigwiimb44BJgL/xo1zwXFmWLx3i+VpeyWp5Tozak+Zw6WyfoHkwb1x+CUsRusGGDf4M/1E8PqDMn6C9HLaZHmZNV0wB9ym4qp2mJRc2cbJNtgts/ISbtGzUFz/EAAAAASUVORK5CYII=" />
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
            <img className={styles.policeShield} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACWFBMVEUAAADnw3P/+cnYrn3ks2HeqFfu46v+/ODz6Kr//+P9/eXyzHnpx4udaFjx166xkHz387jz6ZL034vcp1nx38fQq3Ht3oDq2IP79NDkvFnTk3DZr4LKhFvDfz7r0pjbnFHpyF7jrFPnvGz488ns2Y3oxnzv2X/42oL+2I//74bktoDktoLjvGnfr2fhs2j/95fw1rvbrGLZqG3Rrnb9v1TbuofksVDVHhgAAXgBAW3gpUpvd4XNAAIDAmXluVzpx2PqyFzrwFfuzWbqvFrlv1LWjkbYkj7XPiD/0ljaSinklTj90Gj143Prv0/ruFDpwWDmt1femUTw1Gz1x1fltFvThT3UAwmwo2zdhTXcnUP/217+xVLysERaU2rJJxPTOCLQFg3XdTjQPynXYTHpgj79LA/yy27uXiP5oj+7ABDtcTDgbjbBvINtgpFzY2GUj4G7TCYAAIDu2HXouU/psUvorknuyFrpym3alkrvymE4FjfzfCjVdCjPLBrYnliRelnWMR+9kF7ooD3XkVNONU/8jiy5i1j/723twmL/2E2TYDY6EjnBDAvRDBGptJHNrFLWwHhODk7/vmDVaDLJWSpUOFMMAF1cX3hgHlDEGAqUd1zFUiSNhndCJETZAAbGPh2Ej5lMADnVSCrLPSFpAjaxDg4AG47dtmmBWDrEazOEaUrlYCOjfVKeXzAAEHriqVfgjkfKtnj/4mPy2HgXMInTZT18ennYzHfNwnHiRh42Gk2njVn2gjbTvIe1gD8ACJH6xESjmYSUjHXOeDrFrny0mVgcPpf/tUnV4jRxAAAANnRSTlMA6Uas5saACEIaJcOa+WnOAqu660EC4ZNc9BRIXZyM0vDkvFon++wwsr6xx+Db+TUc9eVvw5jVfch/AAABbklEQVQY02NggABOPn5+Pk4GZMDEzLt2xao1vMxMCDH2xqqulauzlod3t7HDxDi5W+qrw+I9bTL6pmpARbn0dsW2mpvXeib0TLKey6gCFtQ/VLg7PazBvDfeJj3Hco46SMzAJN9i38555u7u5jbu2y23aXIBBY0zDhYe3WMzxc1lQ0LWDst8DzagoKnXkf15BwrmT07Mdt2UZ5ETwwMUNIpIO2ZZkLJocXJS9lbbLZu9dIGChoeP51pkpibPTkxJzbTMjQ7VAQpqRXrvXbZw6cy4OM+kJes2epuBtGu7rfdeYGFrO3HGNFsL66gQK26goGpds1fahFnW4f3TY607miLN1ICCyi5WrjXBUZ3RMR7tHhGuZg4cINdLKLiEujk5mzk7BQVWlDOCxRhEWBzsAxwd/CudrQKC7IUhgkI+RXYhzmb+foFWdnZOPoKQ0BSXLA72LfErdSzztRdjE4AGqJSMLKu8Igurkpy0KIgPAF1iah19uh7QAAAAAElFTkSuQmCC" alt="police" />
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