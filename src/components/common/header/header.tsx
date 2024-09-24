import { ReactElement } from 'react'
import CustomImage from '../image/customImage'
import Cover from '../../../assets/icons/COVER.svg'
import Notification from '../../../assets/icons/notification.svg'
import Menu from '../../../assets/icons/menu.svg'

const NavBar = (): ReactElement => {
  return (
    <nav className=' flex justify-between items-center p-[24px]  bg-white h-[80px] rounded-[16px] mx-5 my-2'>
      <section className=' flex flex-row items-center gap-5'>
        <CustomImage src={Cover} />
        <div>
          <p className=' text-green-900 text-lg font-bold leading-[20px]'>
            GREEN <span className='text-green-700 '>PASTURE</span>
          </p>
          <p className='text-green-700 text-lg font-bold leading-[20px] text-center'>
            {' '}
            GPC
          </p>
        </div>
      </section>
      <section className='flex flex-row items-center gap-5'>
        <CustomImage src={Notification} />
        <CustomImage src={Menu} />
      </section>
    </nav>
  )
}

export default NavBar
