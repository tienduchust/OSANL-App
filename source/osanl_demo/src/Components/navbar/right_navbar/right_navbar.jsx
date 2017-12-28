import React, { Component } from 'react'



export class RightNavbar extends Component {
  render() {
    return (
        <div className="page-top">

            <form className="search-form" action="page_general_search_2.html" method="GET">
                <div className="input-group">
                    <input type="text" className="form-control input-sm" placeholder="Search..." name="query" />
                    <span className="input-group-btn">
                        <a href="" className="btn submit">
                            <i className="icon-magnifier"></i>
                        </a>
                    </span>
                </div>
            </form>

            <div className="top-menu">
                <ul className="nav navbar-nav pull-right">
                    <li className="separator hide"> </li>

                    <li className="dropdown dropdown-extended dropdown-notification dropdown-dark" id="header_notification_bar">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <i className="icon-bell"></i>
                            <span className="badge badge-success"> 7 </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="external">
                                <h3>
                                    <span className="bold">12 pending</span> notifications</h3>
                                <a href="page_user_profile_1.html">view all</a>
                            </li>
                            <li>
                                <ul className="dropdown-menu-list scroller" style={{height: '250px'}} data-handle-color="#637283">
                                    <li>
                                        <a href="">
                                            <span className="time">just now</span>
                                            <span className="details">
                                            <span className="label label-sm label-icon label-success">
                                                <i className="fa fa-plus"></i>
                                            </span> New user registered. </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="separator hide"> </li>
                    <li className="dropdown dropdown-extended dropdown-inbox dropdown-dark" id="header_inbox_bar">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <i className="icon-envelope-open"></i>
                            <span className="badge badge-danger"> 4 </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="external">
                                <h3>You have
                                    <span className="bold">7 New</span> Messages</h3>
                                <a href="app_inbox.html">view all</a>
                            </li>
                            <li>
                                <ul className="dropdown-menu-list scroller" style={{height: "275px"}} data-handle-color="#637283">
                                    <li>
                                        <a href="">
                                            <span className="photo">
                                                <img src="../assets/layouts/layout3/img/avatar2.jpg" className="img-circle" alt="" />> </span>
                                            <span className="subject">
                                                <span className="from"> Lisa Wong </span>
                                                <span className="time">Just Now </span>
                                            </span>
                                            <span className="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="separator hide"> </li>
                    <li className="dropdown dropdown-extended dropdown-tasks dropdown-dark" id="header_task_bar">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <i className="icon-calendar"></i>
                            <span className="badge badge-primary"> 3 </span>
                        </a>
                        <ul className="dropdown-menu extended tasks">
                            <li className="external">
                                <h3>You have
                                    <span className="bold">12 pending</span> tasks</h3>
                                <a href="?p=page_todo_2">view all</a>
                            </li>
                            <li>
                                <ul className="dropdown-menu-list scroller" style={{height: "275px"}} data-handle-color="#637283">
                                    <li>
                                        <a href="">
                                            <span className="task">
                                                <span className="desc">New release v1.2 </span>
                                                <span className="percent">30%</span>
                                            </span>
                                            <span className="progress">
                                                <span style={{width: "40%"}} className="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="sr-only">40% Complete</span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-user dropdown-dark">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <span className="username username-hide-on-mobile"> Nick </span>

                            <img alt="" className="img-circle" src="../assets/layouts/layout4/img/avatar9.jpg" /> </a>
                        <ul className="dropdown-menu dropdown-menu-default">
                            <li>
                                <a href="page_user_profile_1.html">
                                    <i className="icon-user"></i> My Profile </a>
                            </li>
                            <li>
                                <a href="app_calendar.html">
                                    <i className="icon-calendar"></i> My Calendar </a>
                            </li>
                            <li>
                                <a href="app_inbox.html">
                                    <i className="icon-envelope-open"></i> My Inbox
                                    <span className="badge badge-danger"> 3 </span>
                                </a>
                            </li>
                            <li>
                                <a href="app_todo_2.html">
                                    <i className="icon-rocket"></i> My Tasks
                                    <span className="badge badge-success"> 7 </span>
                                </a>
                            </li>
                            <li className="divider"> </li>
                            <li>
                                <a href="page_user_lock_1.html">
                                    <i className="icon-lock"></i> Lock Screen </a>
                            </li>
                            <li>
                                <a href="page_user_login_1.html">
                                    <i className="icon-key"></i> Log Out </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-extended quick-sidebar-toggler">
                        <span className="sr-only">Toggle Quick Sidebar</span>
                        <i className="icon-logout"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}

export default RightNavbar
