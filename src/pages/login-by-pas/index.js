import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './index.css'
console.log(styles)

export default class LoginByPas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iptTelMail: '',
      iptPwd: ''
    }
  }

  componentDidMount() {
    this.props.history.push(this.props.location.pathname)
  }

  render() {
    const { iptTelMail, iptPwd } = this.state
    return (
      <div className={styles['page-login-by-pas']}>
        <div className={styles.header}>
          <Link to="/login-by-tel">
            <FontAwesomeIcon icon="chevron-left" className={styles['fa-chevron-left']} />
          </Link>
          密码登录
        </div>
        <div className={styles.main}>
          <div className={styles['tel-mail']}>
            <label htmlFor="telMail">登录名</label>
            <input
              placeholder="请输入手机号或邮箱"
              id="telMail"
              className={styles.telMail}
              value={iptTelMail}
            />
            {/* label 标签与 input 标签通过 id 进行关联 */}
          </div>
          <div className={styles.pwd}>
            <label htmlFor="ipt-pwd">密码</label>
            <input placeholder="请输入密码" id="ipt-pwd" className={styles['ipt-pwd']} value={iptPwd} />
            <button>
              <FontAwesomeIcon icon="eye" className={styles['fa-eye']} />
            </button>
          </div>
          <div className={styles['btn-login']}>
            <button className={styles.gray}>登录</button>
          </div>
          <p className={styles['forgot-pwd']}>
            <Link to="/forgot-pwd">忘记密码？</Link>
          </p>
          <form>
            <fieldset>
              <legend>或</legend>
              <Link to="/login-by-tel">手机号注册登录</Link>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
