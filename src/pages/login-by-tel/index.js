import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logIn } from '../../actions'

import styles from './index.css'
// console.log(styles)

class LoginByTel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iptTelNum: '18521592119',
      iptCaptcha: '558552',
      captcha: ''
    }

    this._getCaptcha = this._getCaptcha.bind(this)
    this._captchaChange = this._captchaChange.bind(this)
  }

  render() {
    const { iptTelNum, iptCaptcha } = this.state
    const { logIn } = this.props
    return (
      <div className={styles.pageLogin}>
        {/* header */}
        <div className={styles.header}>
          <div className={styles.logo} />
          <Link to="/">
            <FontAwesomeIcon icon="times" className={styles.faTimes} />
          </Link>
        </div>
        {/* main */}
        <div className={styles.main}>
          <div className={styles.tel}>
            <label htmlFor="telNumber">手机号</label>
            <input
              placeholder="请输入手机号"
              id="telNumber"
              className={styles.telNumber}
              value={iptTelNum}
              readOnly
            />
            {/* label 标签与 input 标签通过 id 进行关联 */}
          </div>
          <div className={styles.captcha}>
            <label htmlFor="captcha">验证码</label>
            <input
              placeholder="请输入验证码"
              id="captcha"
              className={styles.captcha}
              value={iptCaptcha}
              onChange={this._captchaChange}
            />
            <button onClick={this._getCaptcha}>获取验证码</button>
          </div>
          <div className={styles.btnLogin}>
            <button onClick={logIn}>手机号注册登录</button>
          </div>
          <p className={styles.term}>
            若您输入的手机号未注册，将会进入注册流程。注册即视为同意
            <a href="javascript: void(0);">《唯品会服务条款》</a>
            、
            <a href="javascript: void(0);">《隐私条款》等</a>
          </p>
          <form>
            <fieldset>
              <legend>或</legend>
              <Link to="/login-by-pas">密码登录</Link>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }

  _getCaptcha() {
    const captcha = String(Date.now()).substr(-6) // 1531020834381 --> 834381
    alert(`验证码为：${captcha}`)
    this.setState({
      captcha,
      iptCaptcha: captcha
    })
  }

  _captchaChange() { }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginByTel)