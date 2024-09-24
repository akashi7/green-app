import { Table } from 'antd'
import { ReactElement, useState } from 'react'
import DeleteIcon from '../../assets/icons/delete.svg'
import EditIcon from '../../assets/icons/edit.svg'
import { clientsData } from '../../utils/data'
import CustomButton from '../common/button/button'
import CustomImage from '../common/image/customImage'
import CustomPagination from '../common/pagination/customPagination'
import { useNavigate } from 'react-router-dom'

const { Column } = Table

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Leads':
      return 'bg-[#F5A8561F] text-[#F5A856]'
    case 'Active':
      return 'bg-[#8FD2231F] text-[#44A15B]'
    case 'Past client':
      return 'bg-[#0E41A91F] text-[#0E41A9]'
    case 'Reviewing':
      return 'bg-[#15CFE014] text-[#0B7079]'
    default:
      return ''
  }
}

const ClientsTable = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePageSizeChange = (size: number) => {
    setPageSize(size)
    setCurrentPage(1) // Reset to first page when page size changes
  }

  const navigate = useNavigate()

  const paginatedData = clientsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  function navigation(id: number) {
    navigate(`/client/${id}`)
  }

  return (
    <div>
      <Table
        className='data_table w-[100%] custom-table-header'
        dataSource={paginatedData}
        rowKey={(record) => record?.id}
        pagination={false}
        bordered={true}
        scroll={{ x: 0 }}
      >
        <Column
          title='Name'
          key='name'
          render={(record) => (
            <span
              className='text-[#031107] cursor-pointer'
              onClick={() => navigation(record.id)}
            >
              {record?.name}
            </span>
          )}
        />
        <Column
          title='Phone Number'
          key='phoneNumber'
          render={(record) => (
            <span className='text-[#031107]'>{record?.phoneNumber}</span>
          )}
        />
        <Column
          title='Number of Services'
          key='numberOfServices'
          render={(record) => (
            <span className='text-[#031107] font-semibold'>
              {record?.numberOfServices}
            </span>
          )}
          sorter={(a, b) =>
            a.numberOfServices.localeCompare(b.numberOfServices)
          }
        />
        <Column
          title='Created Date'
          key='createdDate'
          render={(record) => (
            <span className='text-[#031107] font-semibold'>
              {record?.createdDate}
            </span>
          )}
          sorter={(a, b) =>
            new Date(a.createdDate).getTime() -
            new Date(b.createdDate).getTime()
          }
        />
        <Column
          title='Status'
          key='status'
          render={(record) => {
            const statusClass = getStatusClass(record.status)
            return (
              <span className={`inline-block px-3 py-1 rounded ${statusClass}`}>
                {record.status}
              </span>
            )
          }}
        />
        <Column
          title='Action'
          key='action'
          render={() => (
            <div className='flex space-x-2 justify-center'>
              <CustomButton
                htmlType='button'
                className='c-t-b h-[32px] w-[32px]'
                icon={<CustomImage src={EditIcon} />}
              />
              <CustomButton
                htmlType='button'
                className='c-t-b h-[32px] w-[32px]'
                icon={<CustomImage src={DeleteIcon} />}
              />
            </div>
          )}
        />
      </Table>
      <CustomPagination
        total={clientsData.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  )
}

export default ClientsTable
