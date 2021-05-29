import { Button } from 'antd'

const Categories = ({ categories, filterItems }: any): JSX.Element => {
  return (
    <div className='btn-container'>
      {categories.map((category: string, index: number) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
            style={{ fontWeight: 600, fontSize: '140%' }}>
            <Button style={{ width: '150px', textTransform: 'capitalize' }} type='primary' className='btn-category'>
              {category}
            </Button>
          </button>
        )
      })}
    </div>
  )
}
export default Categories
