import React from 'react'

export default function MenuAdmin() {
    return (
        <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
  <div className="main-navbar">
    <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
      <a className="navbar-brand w-100 mr-0" href="#" style={{lineHeight: '25px'}}>
        <div className="d-table m-auto">
          <img id="main-logo" className="d-inline-block align-top mr-1" style={{maxWidth: '25px'}} src="img/shards-dashboards-logo.svg" alt="Shards Dashboard" />
          <span className="d-none d-md-inline ml-1">QLDVC</span>
        </div>
      </a>
      <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
        <i className="material-icons"></i>
      </a>
    </nav>
  </div>
  <form action="#" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
    <div className="input-group input-group-seamless ml-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <i className="fas fa-search" />
        </div>
      </div>
      <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" /> </div>
  </form>
  <div className="nav-wrapper">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="index.html">
          <i className="material-icons">edit</i>
          <span>Phòng Ban</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="thanhvien.html">
          <i className="material-icons">vertical_split</i>
          <span>Thành Viên</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="hopthu.html">
          <i className="material-icons">note_add</i>
          <span>Hộp Thư</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="phancong.html">
          <i className="material-icons">view_module</i>
          <span>Phân Công</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="quanlycongvan.html">
          <i className="material-icons">table_chart</i>
          <span>Quản lý công văn</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="nhanhoso.html">
          <i className="material-icons">person</i>
          <span>Nhận hồ sơ</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="quanlyhoso.html">
          <i className="material-icons">error</i>
          <span>Quản lý hồ sơ</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="baocao.html">
          <i className="material-icons">vertical_split</i>
          <span>Báo cáo</span>
        </a>
      </li>
    </ul>
  </div>
</aside>

    )
}
