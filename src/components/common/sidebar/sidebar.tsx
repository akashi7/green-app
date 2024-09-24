import { FC, ReactElement, cloneElement } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import OverView from '../../../assets/icons/element-4.svg'
import User from '../../../assets/icons/profile-2user.svg'
import UserL from '../../../assets/icons/profile-3user.svg'

import Icon from '../../../assets/images/image.png'
import CustomImage from '../image/customImage'

interface SidebarItemProps {
  icon: ReactElement
  text: string
  url: string
}

const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  text,
  url,
}): ReactElement => {
  const navigate = useNavigate()
  const isMatch = useMatch(url)

  const handleClick = (): void => {
    navigate(url)
  }

  return (
    <div
      className={`flex flex-row gap-5 items-center mb-5 ${
        isMatch ? '' : ''
      } cursor-pointer p-3 rounded-lg w-full`}
      onClick={handleClick}
    >
      {cloneElement(icon, {
        color: isMatch ? '#C1CF16' : 'white',
      })}
      <p
        className={`${
          isMatch ? ' font-bold ' : ' font-medium'
        } text-[#516155] text-base`}
      >
        {text}
      </p>
    </div>
  )
}

const Sidebar = (): ReactElement => {
  return (
    <section className='w-[300px] h-[100%] flex flex-col py-4 px-5  bg-white border-r border-gray-200'>
      <div className='flex flex-row items-center gap-5 mb-8'>
        <CustomImage src={Icon} className=' rounded-lg' />
        <div>
          <p className='text-[#030311]  font-semibold text-[16px] leading-[24px]'>
            Mohamed ali
          </p>
          <p className='text-[#516155] leading-[19.6px] font-normal text-[14px]'>
            seals
          </p>
        </div>
      </div>
      <div className='mt-0 w-full'>
        <>
          <SidebarItem
            icon={<CustomImage src={OverView} />}
            text='overview'
            url='/'
          />
          <SidebarItem
            icon={<CustomImage src={User} />}
            text='Settings'
            url='/ds/settings'
          />
          <SidebarItem
            icon={<CustomImage src={UserL} />}
            text='Profile'
            url='/ds/profile'
          />
        </>
      </div>
    </section>
  )
}

export default Sidebar
