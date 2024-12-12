import { useState } from 'react';
import Modal from 'react-modal';
import { useCart } from './Context';
import keranjang from '../assets/icons/keranjang.svg';

Modal.setAppElement('#root');

export default function CartModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.nama === item.nama);
    if (existingItem) {
      existingItem.jumlah += 1;
    } else {
      acc.push({ ...item, jumlah: 1 });
    }
    return acc;
  }, []);

  const cartCount = groupedItems.reduce((total, item) => total + item.jumlah, 0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const totalBelanja = groupedItems.reduce(
    (total, item) => total + (item.harga - item.harga * (item.diskon / 100)) * item.jumlah,
    0
  );

  const handleRemove = (itemName) => {
    removeFromCart(itemName);
  };

  return (
    <>
      <button className="btn btn-light" onClick={openModal}>
        <img src={keranjang} alt="keranjang" width="20" /> ({cartCount})
      </button>

      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  style={{
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', 
      width: '80%', 
      maxWidth: '700px',
      height: '530px',
      padding: '20px',
      borderRadius: '10px',
      zIndex: 1050,
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1040,
    },
  }}
>
        <h2 className="mb-4 bg-warning fw-semibold text-center rounded">
          Keranjang <span className="fw-bold text-white">Belanja</span>
        </h2>
        <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Total</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {groupedItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nama}</td>
                  <td>
                    Rp {(item.harga - item.harga * (item.diskon / 100)).toLocaleString('id-ID')}
                  </td>
                  <td>x{item.jumlah}</td>
                  <td>
                    Rp {(
                      (item.harga - item.harga * (item.diskon / 100)) * item.jumlah
                    ).toLocaleString('id-ID')}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(item.nama)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-right mt-4">
          Total: Rp {totalBelanja.toLocaleString('id-ID')}
        </h3>
        <button className="btn btn-warning mt-3" onClick={closeModal}>
          Tutup
        </button>
      </Modal>
    </>
  );
}
