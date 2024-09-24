import { Layout } from 'antd'
import { FC, ReactElement, ReactNode } from 'react'
import CustomImage from '../image/customImage'
import dashboardIcon from '../../../assets/icons/Dashboard.svg'
import leftIcon from '../../../assets/icons/arrow-right.svg'
import { useMatch } from 'react-router-dom'

interface WrapperProps {
  children: ReactNode
}

const ContentWrapper: FC<WrapperProps> = ({ children }): ReactElement => {
  const { Content } = Layout
  const match = useMatch('/client/:id')
  return (
    <Content className=' h-[100%] w-[100%]  bg-[#f1f3f2] '>
      <div className='w-full h-[100%]  mt-[4px] p-5 mb-[500px] overflow-y-auto scroll'>
        <div className='flex flex-row items-center gap-2 mb-8'>
          <CustomImage src={dashboardIcon} />
          <CustomImage src={leftIcon} />
          <p
            className={` font-medium text-[14px] leading-[21px] ${
              match ? 'text-[#44A15B]' : 'text-[#9EA9A0]'
            }`}
          >
            Clients
          </p>
          {match && (
            <>
              <CustomImage src={leftIcon} />
              <p className='text-[#9EA9A0] text-[14px] leading-[21px] font-medium'>
                view client
              </p>
            </>
          )}
        </div>
        {children}
      </div>
    </Content>
  )
}

export default ContentWrapper
