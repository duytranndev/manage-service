import { Button } from 'antd'

const Categories = ({ categories, filterItems }: any): JSX.Element => {
  return (
    <div className='btn-container'>
      {categories.map((category: string, index: number) => {
        return (
          <div
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
            style={{ fontWeight: 600, fontSize: '140%' }}>
            <Button
              style={{ width: '150px', float: 'left', margin: '0px 3px', textTransform: 'capitalize' }}
              type='primary'
              className='btn-category'>
              {category}
            </Button>
          </div>
        )
      })}
    </div>
  )
}
export default Categories
