import { CaretDownOutlined, MessageFilled, NotificationFilled, SendOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import './header.scss'
export default function HeaderAdmin() {
  return (
    <div id='header'>
      <ul>
        <li>
          <a href='#'>
            <MessageFilled />
          </a>
        </li>
        <li>
          <a href='#'>
            <NotificationFilled />
          </a>
        </li>
        <Button className='btn-guithu' type='primary'>
          Gửi thư nhanh <SendOutlined />
        </Button>
        <li>
          <a href='#'>
            Cài đặt <CaretDownOutlined />
          </a>
          <ul className='sub-menu'>
            <li>
              <a href='#'>Hệ thống</a>
            </li>
            <li>
              <a href='#'>Backup</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#'>
            Q.lý Module <CaretDownOutlined />
          </a>
          <ul className='sub-menu'>
            <li>
              <a href='#'>Module</a>
            </li>
            <li>
              <a href='#'>Thêm Module</a>
            </li>
          </ul>
        </li>
        <li className='admin'>
          <a href='#'>
            Admin <UserOutlined /> <CaretDownOutlined />
          </a>
          <ul className='sub-menu'>
            <li>
              <a href='#'>Edit info</a>
            </li>
            <li>
              <a href='#'>Log out</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
