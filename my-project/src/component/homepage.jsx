import About from "./About/about"
import Footer from "./Footer/footer"
import Main from "./Home/main"
import Keyfeature from "./Keyfeature/keyfeature"
import Navbars from "./Navbar/navbar"
import News from "./News/news"
import Product from "./Product/product"
import Testimonial from "./Testimonial/testimonial"


function Homepage() {
  return (
    <div>
   
     <Main/>
     <About/>
     <Product/>
     <Keyfeature/>
     <Testimonial/>
     <News/>
    
    </div>
  )
}

export default Homepage