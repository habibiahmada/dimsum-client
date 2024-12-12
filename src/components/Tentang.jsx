import tentang from '../assets/tentang.png'

function Tentang() {
  return (
    <>
    <section id="banner" className="d-flex justify-content-between align-items-sm-center">
      <div className="container content" style={{ animation: "fadeInLeft 1s ease-in-out", width: "50%" }}>
        <h1 className='fw-semibold display-4'>Tentang <span className='fw-bold text-warning'> Kedai <br />Dimsum!</span></h1>
        <br />
        <p className='text-justify custom-font-size'>Kedai Dimsum adalah tempat yang menyajikan berbagai pilihan <span className='fw-bold'>dimsum autentik</span> dengan cita rasa <span className='fw-bold'>khas Asia</span>. Berfokus pada pengalaman kuliner yang tak terlupakan, Kedai Dimsum menawarkan menu yang dibuat dengan bahan-bahan <span className='fw-bold'>berkualitas tinggi</span> dan teknik memasak yang terinspirasi dari tradisi dimsum klasik.</p>
        <br />
        <p className='text-justify custom-font-size'>Dengan suasana yang <span className='fw-bold'>hangat</span> dan <span className='fw-bold'>nyaman</span>, Kedai Dimsum menjadi tempat yang sempurna untuk menikmati waktu bersama keluarga, teman, atau bahkan sekadar menikmati momen sendiri. Setiap hidangan dimsum disiapkan secara segar setiap hari untuk memastikan <span className='fw-bold'>kelezatan</span> dan <span className='fw-bold'>kesegaran</span> yang maksimal.</p>
        <br />
      </div>

      <div className='hidden' style={{ width: "30%"}}>
            <img src={tentang} alt="Tentang" style={{ width: "100%",height: "100%", objectFit: "cover" }} />
        </div>
    </section>
    </>
  )
}

export default Tentang
