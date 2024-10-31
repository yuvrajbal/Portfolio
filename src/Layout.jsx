import {Outlet} from "react-router-dom"
import Header from "./components/Header"
export default function Layout(){
  return (
    <div className="md:px-16 px-6">
      <Header/>
      <main className="md:max-w-4xl mx-auto md:py-24 py-14">
        <Outlet />
      </main>
    </div>
  )
}