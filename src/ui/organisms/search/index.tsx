import { Input } from 'antd'
import React from 'react'
const { Search } = Input

export default function SearchComponent() {
  const onSearch = (value: any) => console.log(value)
  return <Search placeholder='input search text' allowClear enterButton='Search' size='middle' onSearch={onSearch} />
}
