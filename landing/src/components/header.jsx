import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  PT. Artex Maju Sentosa
                  <span></span>
                </h1>
                <p>Supplier Bahan Kaos Berkualitas Untuk Anda</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Kontak Kami
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
