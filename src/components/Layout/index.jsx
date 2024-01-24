import AppHeader from "../AppHeader"
import Sidebar from "../Sidebar"
import PageContents from "../PageContents"
import AppFooter from "../AppFooter"
import {Space} from "antd"

function HomePage () {
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

export default HomePage
