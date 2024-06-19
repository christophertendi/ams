import React, { useState } from "react";

export const FaqAccordion = () => {
  const faqs = [
    { 
      question: <strong>Dimana lokasi toko Artex?</strong>, 
      answer: "Komplek Ruko, Jl. Sunter Mas Utara Blok H1 No.21 A, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14350" 
    },
    { 
      question: <strong>Apakah hari Minggu buka? Jam berapa toko tutup?</strong>,
      answer: (
        <>
          Mohon maaf hari Minggu kami tutup.<br />
          Berikut jam operasional kami:<br />
          Senin - Sabtu : 8.30 - 17.00
        </>
      )
    },
    { 
      question: <strong>Apakah Artex bisa sekalian membuat kaos?</strong>, 
      answer: "Mohon maaf, kami hanya menyediakan kainnya saja. Jika ada kebutuhan pembuatan kaos, kami siap membantu dengan memberikan referensi yang bisa jadi masukan dan pertimbangan" 
    },
    { 
      question: <strong>Apakah Artex menyediakan sampel gratis?</strong>, 
      answer: "Kami menyediakan free sample (sample gratis), namun untuk ongkos kirimnya ditanggung oleh pembeli" 
    },
    { 
      question: <strong>Apa yang dimaksud dengan setting kain?</strong>, 
      answer: (
        <>
          Lebar kain atau kebanyakan orang menyebutnya Setting-an kain merupakan lebar 1 Roll kain yang dibentangkan biasanya dalam satuan &quot;Inch&quot;. Contohnya setting-an kain 34&quot;, 36&quot;, 38&quot;, 40&quot; dan 42&quot;.
        </>
      )
    },
    { 
      question: <strong>Apa yang dimaksud dengan gramasi?</strong>, 
      answer: "Gramasi adalah satuan ukuran berat kain dalam gram/meter persegi (m2). Jadi, semakin besar berat gramasi maka akan semakin tebal juga kain nya" 
    },
    { 
      question: <strong>Perbedaan ketebalan kain 20s, 24s, 30s, dan 40s itu apa?</strong>, 
      answer: "Ketebalan kain dipengaruhi oleh gramasi nya (gram/m2). Semakin kecil angka ketebalan kain nya, maka akan semakin tebal kain nya dan semakin berat gramasi nya. Contoh nya kain 20s lebih tebal daripada kain ukuran 24s, 30s dan 40s." 
    },
    { 
      question: <strong>Apakah kain Artex ramah lingkungan?</strong>, 
      answer: "Semua hasil produksi kain kami sudah mengikuti standard yg ditentukan pemerintah untuk menjaga lingkungan" 
    },
    { 
      question: <strong>Mengapa kain menyusut setelah dicuci?</strong>, 
      answer: (
        <>
          Susut kain merupakan hal yang umum terjadi karena jenis kain yang kami jual merupakan kain rajut (knitting). Hal ini mengakibatkan kain cenderung lebih elastis dan kemungkinan susut lebih besar.<br />
          Batas toleransi maksimum susut kain berdasarkan standar intertex adalah +-7% ke arah panjang dan +-7% ke arah lebar.<br />
          Contoh cara menghitung:<br />
          Panjang kaos sebelum dicuci = 54 cm<br />
          Lebar kaos sebelum dicuci = 30 cm<br />
          Panjang kaos setelah dicuci = 52 cm<br />
          Lebar kaos setelah dicuci = 27 cm<br />
          (Panjang kaos sebelum dicuci - Panjang kaos setelah dicuci)/ Panjang kaos sebelum dicuci x 100% = Persentase Shrinkage Panjang<br />
          (54-52)/ 54 x 100% = 3.70% (Masih dalam toleransi)<br />
          (Lebar kaos sebelum dicuci - Lebar kaos setelah dicuci)/ Lebar kaos sebelum dicuci x 100% = Persentase Shrinkage Lebar<br />
          (30-26)/30 x 100% = 13,3% (Melebihi standar yaitu 7%, kain dapat diretur)
        </>
      )
    },
    { 
      question: <strong>Apakah warna kain selalu konsisten?</strong>, 
      answer: "Hasil celup kain dengan kode warna yang sama, jika dibandingkan Lot to Lot mungkin ada perbedaan sedikit, namun kami memastikan perbedaan masih dalam batas standard. Karena itu, sangat disarankan agar proses produksi menggunakan Lot yang sama." 
    },
    { 
      question: <strong>Mengapa berat kain roll tidak sesuai dengan yang tertulis pada label sticker?</strong>, 
      answer: (
        <>
          Perbedaan kg-an kain memang hal yang umum terjadi, hal ini dikarenakan berat yang tertera pada label merupakan berat bruto pada saat kain belum diwarnai. Setelah proses pewarnaan kain, berat kain berubah menjadi lebih berat atau lebih ringan. Maksimum selisih berat bruto dan netto adalah 8%. Jika selisih melebihi 8%, customer dapat meretur kain tersebut.<br />
          Contoh:<br />
          Berat Bruto = 25.2 kg<br />
          Berat Netto = 24.1 kg<br />
          (Berat Bruto - Berat Netto)/ Berat Bruto x 100% = Persentase Selisih<br />
          (25.2 - 24.1)/ 25.2 x 100% = 4.36% (Masih dibawah toleransi 8%)<br />
          <br />
          Khusus untuk kain dengan kategori warna putih toleransi selisih berat bruto dan netto adalah 10%
        </>
      )
    },
    { 
      question: <strong>Apa perbedaan antara bruto dan netto?</strong>, 
      answer: (
        <>
          Berat bruto (berat kotor) adalah berat kain greige / kain mentah sebelum melalui proses pewarnaan. Berat netto adalah berat bersih kain sesudah proses pewarnaan.<br />
          Maksimum selisih berat bruto dan netto adalah 8%. Jika selisih melebihi 8%, customer dapat meretur kain tersebut.<br />
          Contoh:<br />
          Berat Bruto = 25.2 kg<br />
          Berat Netto = 24.1 kg<br />
          (Berat Bruto - Berat Netto)/ Berat Bruto x 100% = Persentase Selisih<br />
          (25.2 - 24.1)/ 25.2 x 100% = 4.36% (Masih dibawah toleransi 8%)<br />
          <br />
          Khusus untuk kain dengan kategori warna putih toleransi selisih berat bruto dan netto adalah 10%
        </>
      )
    },
    { 
      question: <strong>Mengapa kain saya mempunyai cacat?</strong>, 
      answer: (
        <>
          Kami berkomitmen untuk selalu menjaga kualitas kain kami. Namun dalam proses produksi tidak selalu kain yang dihasilkan akan sempurna 100%. Defek pada kain adalah hal yang umum terjadi pada hasil produksi manapun dan tidak dapat dihindari oleh karena itu diperlukan peraturan toleransi defek kain, akan tetapi kami selalu menjaga komitmen dan kualitas kami.<br />
          Maksimum 10 point dalam 1 roll (+/- 25 kg) Point dihitung dari cacat kain per meter. Jika ada 1 bolong dalam jarak 1 meter, dihitung 1 point. Jika ada 2 bolong dalam jarak 1 meter, dihitung 1 point. Ukuran besar kecilnya bolong tidak berpengaruh selama masih dalam area 1 meter.
        </>
      )
    },
    { 
      question: <strong>Apa itu Kerah dan Manset?</strong>, 
      answer: (
        <>
          Kerah merupakan jenis kain yang digunakan untuk melengkapi bagian leher dan Manset adalah jenis kain yang digunakan untuk melengkapi lengan kaos kerah/polo shirt. Biasanya kerah dan manset dijual bersamaan dengan kain Pique.
        </>
      )
    },
    { 
      question: <strong>Berapa lama waktu yang dibutuhkan untuk pre-order?</strong>, 
      answer: (
        <>
          Untuk PO lama pengerjaan kira-kira 30 hari kerja dalam situasi normal.
        </>
      )
    },
    { 
      question: <strong>Apakah boleh jika melakukan order via Whatsapp dan melakukan pembayaran di toko saat pengambilan kain?</strong>, 
      answer: (
        <>
          Kain akan kami proses pemesanannya dan masuk antrian pengerjaan ketika pembayaran sudah dilakukan. Akan tetapi untuk pengambilan kain bisa diambil ke toko setelah selesai kami kerjakan.
        </>
      )
    },
    { 
      question: <strong>Apakah Artex bisa menerbitkan faktur pajak?</strong>, 
      answer: (
        <>
          PT. Artex Maju Sentosa dapat menerbitkan faktur pajak untuk customer yang memiliki NPWP.<br />
          Hal yang perlu dilakukan adalah kirimkan NPWP, SPPKP, alamat email, contact person, nomor telepon yang dapat kami hubungi ke Customer Service kami maksimal 7 hari dari tanggal cetak invoice.<br />
          Syarat pengajuan faktur pajak:<br />
          - Fotokopi NPWP dan SPPKP<br />
          - Pengajuan faktur pajak hanya dapat dilakukan setelah kami melakukan penyerahan barang atau pengiriman<br />
          - Faktur pajak akan kami terbitkan paling lambat tanggal 15 pada bulan berikutnya<br />
          - Pengajuan faktur pajak selambat-lambatnya adalah 7 hari dari tanggal cetak invoice<br />
          - Faktur pajak akan dikirimkan ke email yang terdaftar pada sistem kami<br />
          - Customer diwajibkan untuk membuat nota retur atas pengembalian/ pembatalan pesanan sesuai dengan ketetapan pajak yang berlaku dan dikirimkan ke email artexmajusentosa.textile@gmail.com.
        </>
      )
    },
    { 
      question: <strong>Apakah barangnya bisa diantar?</strong>, 
      answer: (
        <>
          Bisa dengan minimal pembelian 12 roll, area Jakarta.
        </>
      )
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq-accordion">
      <div className="container">
        <div className="section-title text-center mt-0">
          <h2 id="faq-title">FAQ</h2>
        </div>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
                id={`faq-question-${index + 1}`}
              >
                {faq.question}
              </div>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "show" : ""
                }`}
                id={`faq-answer-${index + 1}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}