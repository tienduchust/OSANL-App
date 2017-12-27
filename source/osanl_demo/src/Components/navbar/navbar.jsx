import React, { Component } from 'react'
import { LeftNavbar } from './left_navbar/left_navbar';
import { RightNavbar } from './right_navbar/right_navbar';
import { PageLogo } from './left_navbar/page_logo';
import { PageLink } from './left_navbar/page_link';
import { PageAction } from './left_navbar/page_action';

export class Navbar extends Component {
  render() {
    return (
      <div class="page-header-inner">
           <PageLogo/>
           <PageLink/>
           <PageAction/>
           <RightNavbar/>
      </div>
    )
  }
}

export default Navbar



