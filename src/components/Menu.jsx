import menu from '../assets/menu.png';
import MenuList from './MenuList';


function Menu() {
  return (
    <>
      <section id="menu" className="d-flex justify-content-between " style={{  margin: 0, padding: 0 }}>
        <div className='hidden' style={{ width: "30%"}}>
            <img src={menu} alt="Menu" style={{ width: "100%",height: "100%", objectFit: "cover" }} />
        </div>
        <div className="container content pt-5 pb-5" style={{ animation: "fadeInRight 1s ease-in-out", width: "60%"}}>
            <h1 className='fw-semibold fs-1 bg-warning text-center'>Daftar Menu <span className='fw-bold text-white'>Dimsum</span></h1>
            <br />
                <MenuList />
        </div>

      </section>
    </>
  )
}

export default Menu
