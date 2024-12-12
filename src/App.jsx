import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Menu from "./components/Menu"
import Distance from "./components/Distance"
import Tentang from "./components/Tentang"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Distance id="menu"/>
      <Menu />
      <Distance id="tentang"/>
      <Tentang />
      <Distance />
      <Footer />
    </div>
  )
}

export default App
