import About from "./About/about"
import Footer from "./Footer/footer"
import Main from "./Home/main"
import Keyfeature from "./Keyfeature/keyfeature"
import Navbars from "./Navbar/navbar"
import News from "./News/news"
import Product from "./Product/product"



function Homepage() {
  return (
    <div>
   
     <Main/>
     <About/>
     <Product/>
     <Keyfeature/>
   
     <News/>
    
    </div>
  )
}

export default Homepage