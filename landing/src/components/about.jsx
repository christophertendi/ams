import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/Artex_Building_1.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Tentang Kami</h2>
              <p>PT. ARTEX MAJU SENTOSA merupakan perusahaan yang bergerak di industri tekstil. Dikenal sebagai salah satu supplier bahan kaos ternama, Artex telah beroperasi sejak tahun 2006. <br></br><br></br>

                  Kami menyediakan berbagai jenis kain :<br></br>

                  - Cotton Combed <br></br>

                  - Cotton Carded <br></br>

                  - Teteron Cotton (TC) <br></br>

                  - Chief Value Cotton (CVC) <br></br>

                  - Polyester (PE) <br></br>

                  - Single / Double Knit, Fleece, Babyterry, dan masih banyak lagi.<br></br><br></br>

                  Kami berharap Anda menyukai produk-produk kami</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
