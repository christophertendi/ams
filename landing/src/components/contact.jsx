import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Kontak dan Lokasi</h2>
                <p>
                  Jika anda ingin menanyakan mengenai produk kami, jangan ragu untuk mengirim pesan kepada kami
                  <br />
                  <br />
                  <strong>Jam Operasional :</strong>
                  <br />
                  Senin - Sabtu : 8.30 - 17.00 WIB
                </p>
              </div>
              <form
                name="sentMessage"
                action="https://formsubmit.co/chris.samuelten@gmail.com"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="No. HP"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        id="subject"
                        name="subject"
                        className="form-control"
                        required
                      >
                        <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                        <option value="Keluhan">Keluhan</option>
                        <option value="Kritik dan Saran">Kritik dan Saran</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Pesan"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Alamat
                </span>
                Komplek Ruko, Jl. Sunter Mas Utara No.21 A Blok H No. 21 A, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14350
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Nomor Telepon
                </span>{" "}
                (021) 6505 764 <br />
                (62) 811 952 1770
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                artexmajusentosa.textile@gmail.com
              </p>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href={"https://wa.link/8d50dl"}>
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href={"https://www.instagram.com/artex_textile/"}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8440827791924!2d106.87115017475!3d-6.151630493835458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59e06d6165d%3A0x67d8f19f995ce4af!2sPT%20ARTEX%20MAJU%20SENTOSA!5e0!3m2!1sen!2sid!4v1712733077802!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="maps"
          ></iframe>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>Copyright © 2023 PT Artex Maju Sentosa</p>
        </div>
      </div>
    </div>
  );
};
