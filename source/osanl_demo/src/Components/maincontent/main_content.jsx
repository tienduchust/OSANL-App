import React, { Component } from 'react'
import Sidebar from './sidebar'

export class MainContent extends Component {
  render() {
    return (
      <div className="page-container">

        <Sidebar/>
        <a href="javascript:;" class="page-quick-sidebar-toggler">
                <i class="icon-login"></i>
        </a>
      </div>
    )
  }
}

export default MainContent
