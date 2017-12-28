import React, { Component } from 'react'
import Sidebar from './sidebar'

export class MainContent extends Component {
  render() {
    return (
      <div className="page-container">

        <Sidebar/>
        <a href="" className="page-quick-sidebar-toggler">
          <i className="icon-login"></i>
        </a>
      </div>
    )
  }
}

export default MainContent
