import React from 'react';

export const Navigation = (props) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#page-top">
            <img src="/landing/public/img/ARTEX Logo Purple.jpg" alt="Logo" className="logo" />
          </a>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}   
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Visi & Misi
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Produk
              </a>
            </li>
            <li>
              <a href="#order" className="page-scroll">
                Pesan Sekarang
              </a>
            </li>
            <li>
              <a href="#faq" className="page-scroll" onClick={() => scrollToSection('faq-accordion')}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Kontak
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1KjLfr7CuPMAPmvTCnzVp6OCDUzwfC3Z0/view"
                className="page-scroll"
              >
                Download Katalog Produk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
