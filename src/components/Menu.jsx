import { useState, useEffect } from 'react';
import menuImage from '../assets/menu.png';
import MenuList from './MenuList';
import Loading from './Loading';

function Menu() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/`);
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      <section id="menu" className="d-flex justify-content-between" style={{ margin: 0, padding: 0 }}>
        <div className="hidden" style={{ width: "25%" }}>
          <img src={menuImage} alt="Menu" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="container content pt-5 pb-5" style={{ animation: "fadeInRight 1s ease-in-out", width: "60%" }}>
          <h1 className="fw-semibold fs-1 bg-warning text-center">
            Daftar Menu <span className="fw-bold text-white">Dimsum</span>
          </h1>
          <br />
          {loading ? <Loading /> : <MenuList menu={menuData} />}
        </div>
      </section>
    </>
  );
}

export default Menu;
