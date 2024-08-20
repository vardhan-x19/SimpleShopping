import Header from "../Comp/Header"
import Footer from "../Comp/Footer"
import HomeItem from "./HomeItem"
import Fetch from "../Comp/Fetch"
import Bag from "./Bag"
import Profile from "../Comp/Profile"
import { Outlet } from "react-router-dom"
function App() {
  
  return (<>
        <Header></Header>
        <Fetch></Fetch>
        <Outlet/>
        <Footer></Footer>
    </>
  )
}
export default App
