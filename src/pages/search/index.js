import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './index.css'
console.log(styles)

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.clickBack = this.clickBack.bind(this)
  }
  render() {
    return (
      <div className="page-search">
        <div className={styles.searchBox}>
          <button onClick={this.clickBack}>
            <FontAwesomeIcon icon="chevron-left" className={styles.faChevronLeft} />
          </button>
          <input
            className={styles.iptSearch}
            placeholder="大家正在搜索：面膜"
          />
          <button className={styles.btnSearch}>搜索</button>
        </div>
        <div className={styles.searchHistory}>
          <p>
            <span>最近搜索</span>
            <button>清空</button>
          </p>
          <ul className={styles.searchList}>
            <li>围巾</li>
            <li>文胸</li>
            <li>面膜</li>
            <li>女鞋</li>
            <li>衬衫</li>
            <li>口红</li>
            <li>大衣</li>
            <li>羽绒服</li>
          </ul>
        </div>
        <hr className={styles.splitLine} />
        <div className={styles.topSearch}>
          <p>
            <span>热门搜索</span>
          </p>
          <ul className={styles.topSearchList}>
            <li>围巾</li>
            <li>文胸</li>
            <li>面膜</li>
            <li>女鞋</li>
            <li>衬衫</li>
            <li>口红</li>
            <li>大衣</li>
            <li>羽绒服</li>
            <li>长裙</li>
          </ul>
        </div>
      </div>
    )
  }

  clickBack() {
    window.location.hash = '/'
  }
}