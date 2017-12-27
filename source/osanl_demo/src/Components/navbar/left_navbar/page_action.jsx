import React, { Component } from 'react'

export class PageAction extends Component {
  render() {
    return (
        <div className="page-actions">
          <div className="btn-group">
              <button type="button" className="btn red-haze btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <span className="hidden-sm hidden-xs">Actions&nbsp;</span>
                  <i className="fa fa-angle-down"></i>
              </button>
              <ul className="dropdown-menu" role="menu">
                  <li>
                      <a href="javascript:;">
                          <i className="icon-docs"></i> New Post </a>
                  </li>
                  <li>
                      <a href="javascript:;">
                          <i className="icon-tag"></i> New Comment </a>
                  </li>
                  <li>
                      <a href="javascript:;">
                          <i className="icon-share"></i> Share </a>
                  </li>
                  <li className="divider"> </li>
                  <li>
                      <a href="javascript:;">
                          <i className="icon-flag"></i> Comments
                          <span className="badge badge-success">4</span>
                      </a>
                  </li>
                  <li>
                      <a href="javascript:;">
                          <i className="icon-users"></i> Feedbacks
                          <span className="badge badge-danger">2</span>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
    )
  }
}

export default PageAction
