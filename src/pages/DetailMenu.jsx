import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMenuById } from '../api/MenuApi';
import Navbar from '../components/Navbar';
import { useCart } from '../components/Context';
import addIcon from '../assets/icons/add.svg';
import panah from '../assets/icons/panah.svg';

const DetailMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const getMenuDetail = async () => {
      try {
        const data = await fetchMenuById(id);
        setMenu(data);
      } catch (error) {
        console.error('Error fetching menu details:', error);
        setError('Failed to load menu details');
      }
    };

    getMenuDetail();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!menu) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <section id={menu.id} className="d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ margin: 0, padding: '20px' }}>
        <div className="image-container mb-4 mb-md-0" style={{ width: "100%", maxWidth: "500px", height: "auto", overflow: "hidden",animation: "fadeInLeft 1s ease-in-out" }}>
          <img 
            src={`../public/MenuList/${menu.gambar}`} 
            alt={menu.gambar} 
            className="img-fluid" 
            style={{ objectFit: "cover", width: "100%", height: "auto" }} 
          />
        </div>

        <div className="container content" style={{ width: "100%", maxWidth: "600px", animation: "fadeInRight 1s ease-in-out" }}>
          <button
            className="btn btn-warning mt-3"
            onClick={() => navigate(-1)}
          >
            <img
              src={panah}
              alt="panah"
              style={{ width: "15px", height: "15px", transform: "rotate(180deg)" }}
            />
          </button>
          <h1 className="fw-bold fs-1 mt-4 mb-3">{menu.nama}</h1>
          
          <p className="card-text mb-3">
            {menu.diskon > 0 && (
              <>
                <span
                  className="fw-bold bg-warning p-1"
                  style={{ fontSize: '12px' }}
                >
                  {menu.diskon}%
                </span>{' '}
                <del style={{ fontSize: '12px' }}>
                  Rp. {menu.harga.toLocaleString('id-ID')}
                </del>
              </>
            )}
            <span className="fs-4 fw-bold"> Rp. {(menu.harga - (menu.harga * (menu.diskon / 100))).toLocaleString('id-ID')}</span>
          </p>

          <h3 className="fw-semibold">Apa itu {menu.nama}?</h3>
          <p><span className="fw-semibold">Deskripsi:</span> {menu.deskripsi}</p>
          <p><span className="fw-semibold">Isi:</span> {menu.isi}</p>
          
          <button
            className="text-decoration-none fw-semibold bg-warning p-2 rounded-pill"
            style={{
              fontSize: '16px',
              border: 'none',
              outline: 'none'
            }}
            onClick={() => addToCart(menu)}
          >
            <img src={addIcon} width={18} alt="add" /> Tambah ke Keranjang
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailMenu;
