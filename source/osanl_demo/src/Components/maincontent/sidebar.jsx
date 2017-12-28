import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {
    return (
        <div className="page-sidebar-wrapper">                
                <div className="page-sidebar navbar-collapse collapse">                 
                    <ul className="page-sidebar-menu page-sidebar-menu-closed" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                        <li className="nav-item  ">
                            <a href="" className="nav-link nav-toggle">
                                <i className="icon-diamond"></i>
                                <span className="title">UI Features</span>
                                <span className="arrow"></span>
                            </a>
                            <ul className="sub-menu">
                                <li className="nav-item  ">
                                    <a href="ui_metronic_grid.html" className="nav-link ">
                                        <span className="title">Metronic Grid System</span>
                                    </a>
                                </li>
                                <li className="nav-item  ">
                                    <a href="ui_colors.html" className="nav-link ">
                                        <span className="title">Color Library</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item  ">
                            <a href="" className="nav-link nav-toggle">
                                <i className="icon-puzzle"></i>
                                <span className="title">Components</span>
                                <span className="arrow"></span>
                            </a>
                            <ul className="sub-menu">
                                <li className="nav-item  ">
                                    <a href="components_date_time_pickers.html" className="nav-link ">
                                        <span className="title">Date & Time Pickers</span>
                                    </a>
                                </li>
                                <li className="nav-item  ">
                                    <a href="components_color_pickers.html" className="nav-link ">
                                        <span className="title">Color Pickers</span>
                                        <span className="badge badge-danger">2</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    )
  }
}

export default Sidebar
