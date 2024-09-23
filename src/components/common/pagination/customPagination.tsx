import { Pagination } from 'antd'
import React from 'react'

interface CustomPaginationProps {
  total: number
  pageSize: number
  onPageChange: (page: number, pageSize?: number) => void
  onPageSizeChange: (pageSize: number) => void
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  total,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  return (
    <div className=' flex justify-between items-center mt-10'>
      <div className=' flex flex-row items-center gap-4'>
        <span className='text-[#516155] text-[14px]'>Showing</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className='p-2'
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
        <span className='text-[#031107] text-[14px] font-semibold'>
          Per Page
        </span>
      </div>
      <div className='page-numbers'>
        <Pagination
          total={total}
          pageSize={pageSize}
          onChange={onPageChange}
          showSizeChanger={false}
          showQuickJumper={false}
        />
      </div>
      <p className=' text-[#5D5C75] font-bold'>
        Total {Math.ceil(total / pageSize)} Pages
      </p>
    </div>
  )
}

export default CustomPagination
