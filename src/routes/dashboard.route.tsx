import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import ClientList from '../components/clients/list'
import ContentWrapper from '../components/common/contentwrapper/contentwrapper'
import NavBar from '../components/common/header/header'
import Sidebar from '../components/common/sidebar/sidebar'

const Dashboard = () => {
  return (
    <Layout className='h-[100vh] bg-white overflow-y-hidden'>
      <div className='flex h-[100%]'>
        <Sidebar />
        <div className='flex-1 h-[100%] flex flex-col  mb-16 p-[10px]'>
          <NavBar />
          <ContentWrapper>
            <Routes>
              <Route path='/' element={<ClientList />} />
            </Routes>
          </ContentWrapper>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
