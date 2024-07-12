import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const RootLayout = () => {
  return (
    <div>
        <Header />
        {/*children*/}
            <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout