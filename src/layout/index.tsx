import { Outlet } from "react-router-dom"
import Header from "../component/constant/header"
import Fotter from "../component/constant/Fotter"


function Index() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Fotter/>
    </div>
  )
}

export default Index