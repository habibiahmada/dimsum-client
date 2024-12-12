import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMenu } from '../api/MenuApi';
import { useCart } from './Context';
import addIcon from '../assets/icons/add.svg';
import StarRating from "./Stars";

const MenuList = () => {
    const [menu, setMenu] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {

        const loadMenu = async () => {
            try {
                const data = await fetchMenu();
                setMenu(data);
            } catch (error) {
                console.error('Error loading menu:', error);
            }
        };

        loadMenu();
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {menu.map((item) => (
                <div className="col object-fit-xxl-contain" key={item.id}>
                    <div className="card h-100" style={{ cursor: 'pointer' }}>
                        <Link to={`/menu/${item.id}`}>
                        <img
                            src={`/menuList/${item.gambar}`}
                            className="card-img-top"
                            alt={item.nama}/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{item.nama}</h5>
                            <p className="card-text">
                                {item.diskon > 0 && (
                                    <>
                                        <span
                                            className="fw-bold bg-warning p-1"
                                            style={{ fontSize: '12px' }}
                                        >
                                            {item.diskon}% OFF
                                        </span>{' '}
                                        <del style={{ fontSize: '12px' }}>
                                            Rp. {item.harga.toLocaleString('id-ID')}
                                        </del>
                                    </>
                                )}
                                <br />
                                <span>Rp. {(item.harga - (item.harga * (item.diskon / 100))).toLocaleString('id-ID')}</span>
                            </p>
                            <div className="d-flex justify-content-between">
                                <StarRating rating={item.ulasan} />
                                <button
                                    className="text-decoration-none fw-semibold bg-warning px-2 rounded"
                                    style={{
                                        fontSize: '10px',
                                        border: 'none',
                                        outline: 'none'
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        addToCart(item);
                                    }}
                                >
                                    <img src={addIcon} width={10} alt="add" /> Tambah
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
