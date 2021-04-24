import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import AdminRouting from '../../../share/routing/admin'
import { fetchDepartments } from '../../../store/recuders/department.reducer'
import { fetchFields } from '../../../store/recuders/field.reducer'
import { fetchServices } from '../../../store/recuders/service.reducer'
import { fetchStaffs } from '../../../store/recuders/staff.reducer'
import { fetchUnits } from '../../../store/recuders/unit.reducer'
import MenuAdmin from '../../../ui/organisms/menu'
import HeaderAdmin from '../../organisms/header-admin'
// import './index.scss'

const { Sider, Content } = Layout
export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    const loadDepartment = async () => {
      await dispatch(fetchDepartments())
    }
    loadDepartment()
  }, [])

  useEffect(() => {
    const loadField = async () => {
      await dispatch(fetchFields())
    }
    loadField()
  }, [])

  useEffect(() => {
    const loadStaff = async () => {
      await dispatch(fetchStaffs())
    }
    loadStaff()
  }, [])

  useEffect(() => {
    const loadUnit = async () => {
      await dispatch(fetchUnits())
    }
    loadUnit()
  }, [])

  useEffect(() => {
    const loadService = async () => {
      await dispatch(fetchServices())
    }
    loadService()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
            <Link to='/admin'>
              <div className='logo'>
                <img
                  src='https://dichvucong.gov.vn/p/home/theme/img/header/logo.png'
                  style={{ width: '100%' }}
                  alt=''
                />
              </div>
            </Link>
            <MenuAdmin />
          </Sider>

          <Layout className='site-layout'>
            <HeaderAdmin />
            <Content
              className='site-layout-background'
              style={{
                margin: '24px 16px',
                padding: '10px 24px',
                minHeight: 280
              }}>
              <AdminRouting />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </>
  )
}
