import Nav from "../components/HomepageNav"
import Hero from "../components/HomepageHero"
import Responsive from "../components/HomepageResponsive"
import Products from "../components/Homepageproducts"
import Tools from "../components/Homepagetools"


export default function Home() {
  return (
    <div>
      <Hero/>
      <Responsive/>
      <Products/>
      <Tools/>
      
    </div>
    
  );
}
