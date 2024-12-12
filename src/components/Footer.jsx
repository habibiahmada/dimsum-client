function Footer() {
    return (
      <>
          <footer style={{ backgroundColor: "#deded5" }}>
            <div className="container p-4">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4">
                  <h5
                    className="mb-3 fw-bold"
                    style={{ letterSpacing: "2px"}}
                  >
                    Kedai Dimsum
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea
                    quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
                    repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!
                  </p>
                </div>
  
                <div className="col-lg-3 col-md-6 mb-4">
                  <h5
                    className="mb-3"
                    style={{ letterSpacing: "2px"}}
                  >
                    Links
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <a href="#!" className="text-black">
                        Yang Sering Ditanyakan
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-black">
                        Antar Pesanan
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-black">
                        Harga
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-black">
                        Dimana Kita Memesan?
                      </a>
                    </li>
                  </ul>
                </div>
  
                <div className="col-lg-3 col-md-6 mb-4">
                  <h5
                    className="mb-1"
                    style={{ letterSpacing: "2px"}}
                  >
                    Jam Buka Kedai:
                  </h5>
                  <table
                    className="table"
                    style={{ color: "#4f4f4f", borderColor: "#666" }}
                  >
                    <tbody>
                      <tr>
                        <td>Senin - Jumat:</td>
                        <td>08.00 - 21.00</td>
                      </tr>
                      <tr>
                        <td>Sabtu - Minggu:</td>
                        <td>08.00 - 22.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2024 Copyright:{" "}
              <a className="text-dark" href="https://www.linkedin.com/in/habibi-ahmad-aziz-0b3618283/">
                Habibi Ahmad Aziz
              </a>
            </div>
          </footer>
      </>
    );
  }
  
  export default Footer;
  