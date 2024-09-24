import AddIcon from '../../assets/icons/add-circle.svg'
import FilterIcon from '../../assets/icons/document-filter.svg'
import CustomButton from '../common/button/button'
import CustomImage from '../common/image/customImage'
import ClientsTable from '../tables/clientTable'

const ClientList = () => {
  return (
    <section>
      <section className=' flex justify-between items-center'>
        <div>
          <p className='text-[#031107] text-[20px] font-semibold leading-[28px]'>
            Clients list
          </p>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <CustomButton
            htmlType='button'
            icon={<CustomImage src={FilterIcon} />}
            className=' w-[151px] h-[56px] text-[#44A15B] filter-button'
          >
            Filter
          </CustomButton>
          <CustomButton
            htmlType='button'
            icon={<CustomImage src={AddIcon} />}
            className=' w-[235px] h-[56px] text-[#44A15B] add-new-button'
          >
            Add new client
          </CustomButton>
        </div>
      </section>
      <section className='mt-10'>
        <ClientsTable />
      </section>
    </section>
  )
}

export default ClientList
