import { Steps } from 'antd'
import { useMemo, useState } from 'react'
import EditIcon from '../../assets/icons/edit-2.svg'
import MapIcon from '../../assets/icons/map.svg'
import CustomButton from '../common/button/button'
import CustomImage from '../common/image/customImage'

const { Step } = Steps

const OneClient = () => {
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

  const statusClass = getStatusClass('Active')

  const [current, setCurrent] = useState(0)

  const steps = useMemo(
    () => [
      {
        title: 'Visit 1',
        content: 'Content for Visit 1',
      },
      {
        title: 'Visit 2',
        content: 'Content for Visit 2',
      },
      {
        title: 'Visit 3',
        content: 'Content for Visit 3',
      },
    ],
    []
  )

  const handleStepClick = (index: number) => {
    setCurrent(index === current ? -1 : index) // Toggle visibility
  }

  return (
    <div>
      <section className=' flex justify-between items-center'>
        <div>
          <p className='text-[#031107] text-[20px] font-semibold leading-[28px]'>
            Clients Details
          </p>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <CustomButton
            htmlType='button'
            icon={<CustomImage src={EditIcon} />}
            className=' w-[151px] h-[56px] text-[#44A15B] filter-button'
          >
            Filter
          </CustomButton>
          <CustomButton
            htmlType='button'
            className=' w-[235px] h-[56px] text-[#44A15B] add-new-button'
          >
            add New service
          </CustomButton>
        </div>
      </section>
      <section className='mt-10 p-5  rounded-[8px] bg-[#FCFDFC]'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-row items-center gap-10'>
            <p className='text-[#516155] text-[18px] font-medium'>Client ID </p>
            <p className='text-[#031107] text-[20px] font-medium'>#667k999</p>
            <p className={`inline-block px-3 py-1 rounded ${statusClass}`}>
              Active
            </p>
          </div>
          <div className='flex  flex-row items-center gap-5'>
            <p className='text-[#516155] text-[18px] font-medium'>
              Created Date{' '}
            </p>
            <p className='text-[#031107] text-[20px] font-medium'>22-9-2024</p>
          </div>
        </div>
        <div className='border-t-2 border-gray-200 my-4' />
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Client Name{' '}
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            {' '}
            Ali Muhammed{' '}
          </p>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Phone Number{' '}
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            {' '}
            0999999999
          </p>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Email
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            {' '}
            email@email.com{' '}
          </p>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Note
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            N/A
          </p>
        </div>
      </section>
      <section className='mt-10 p-5  rounded-[8px] bg-[#FCFDFC]'>
        <div>
          <p className='text-[#031107] font-[500] text-[16px] leading-[24px]'>
            Unit Details
          </p>
        </div>
        <div className='border-t-2 border-gray-200 my-4' />
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Unit Name 1
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            home - master room
          </p>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Unit Address
          </p>
          <div className='flex flex-row items-center gap-3'>
            <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
              address is simply dummy text of the printing and typesetting
              industry.
            </p>
            <CustomImage src={MapIcon} />
            <p className=' underline text-[#44A15B]'>View on map</p>
          </div>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Note
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            N/A
          </p>
        </div>
        <div className='border-t-2 border-gray-200 my-4' />
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Unit Name 2
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            Factory
          </p>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Unit Address
          </p>
          <div className='flex flex-row items-center gap-3'>
            <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
              address is simply dummy text of the printing and typesetting
              industry.
            </p>
            <CustomImage src={MapIcon} />
            <p className=' underline text-[#44A15B]'>View on map</p>
          </div>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Note
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            N/A
          </p>
        </div>
      </section>
      <p className='text-[#031107] text-[16px] font-[500] leading-[24px] mt-5'>
        Services
      </p>
      <section className='mt-5 p-5  rounded-[8px] bg-[#FCFDFC]'>
        <div>
          <p className='text-[#031107] font-[500] text-[16px] leading-[24px]'>
            Report
          </p>
        </div>
        <div className='border-t-2 border-gray-200 my-4' />
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Type of injury
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            flying insects - crawling insects
          </p>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Infection level
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            High
          </p>
        </div>
        <div className='flex flex-row items-center gap-5 mb-2 '>
          <p className='w-[150px] font-[400] leading-[19.6px] text-[#516155] text-[14px] '>
            Note
          </p>
          <p className='text-[#031107] font-[400] text-[14px] leading-[19.6px]'>
            N/A
          </p>
        </div>
      </section>
      <section className='mt-5 p-5  rounded-[8px] bg-[#FCFDFC]'>
        <div>
          <p className='text-[#031107] font-[500] text-[16px] leading-[24px]'>
            Steps
          </p>
        </div>
        <div className='border-t-2 border-gray-200 my-4' />
        <section>
          <Steps
            current={current}
            className='steps'
            direction='vertical'
            onChange={setCurrent}
          >
            {steps.map((step, index) => (
              <Step
                key={index}
                title={
                  <div
                    className={`step-title ${
                      current === index ? 'active' : ''
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    {step.title}
                  </div>
                }
                description={
                  current === index && (
                    <div className='step-content'>{step.content}</div>
                  )
                }
              />
            ))}
          </Steps>
        </section>
      </section>
    </div>
  )
}

export default OneClient
