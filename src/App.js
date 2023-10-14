import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import PageContents from './components/PageContents'
import Sidebar from './components/Sidebar'
import {Space} from 'antd'
import './index.css'

function App () {
  return (
    <>
      <AppHeader />
        <Space className="SideAndPage">
          <Sidebar />
          <PageContents />
        </Space>
      <AppFooter />
    </>
  )
}

export default App
