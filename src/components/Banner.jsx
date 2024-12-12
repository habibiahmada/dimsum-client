import banner from '../assets/banner.png';
import panah from '../assets/icons/panah.svg';

function Banner() {
  return (
    <>
      <section id="banner" className="d-flex justify-content-between align-items-sm-center" style={{ margin: 0, padding: 0 }}>
        <div className="container pt-5 pt-xl-0 content" style={{ animation: "fadeInLeft 1s ease-in-out", width: "50%" }}>
          <h1 className="fw-semibold display-4">
            Selamat Datang di <br />
            <span className="fw-bold text-warning"> Kedai Dimsum!</span>
          </h1>
          <br />
          
          <p className="text-justify custom-font-size">
            Nikmati pengalaman kuliner yang tak terlupakan dengan berbagai pilihan dimsum segar dan lezat. Dibuat dengan bahan berkualitas tinggi dan resep autentik, kami hadir untuk memanjakan selera Anda.
          </p>
          <br />
          <p className="text-justify custom-font-size">
            🧡 Cita rasa istimewa, kenangan yang tak terlupakan.
          </p>
          <br />
          
          <div className="d-flex justify-content-end">
            <a href="#menu" className="btn rounded-pill btn-warning fw-semibold">
              Lihat menunya yuk! <span><img src={panah} width={15} alt="panah" /></span>
            </a>
          </div>
        </div>

        <div className="hidden" style={{ width: "30%" }}>
          <img src={banner} alt="Banner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>
    </>
  );
}

export default Banner;
