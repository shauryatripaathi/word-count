import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import About from "./About/About"
import Home from "./Home/Home"
import Layout from "./layout"

export default function NavBar(){
    return(
        <>
        <div>
           <BrowserRouter>
           <Layout></Layout>
           <Routes>
               <Route path ='/' element = {<Home />} />
               <Route path = '/about' element = {<About />} />
           </Routes>
           </BrowserRouter>
        </div>
        </>
    )
}