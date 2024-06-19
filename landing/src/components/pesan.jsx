import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nomorTelpon: '',
    produk: 'cotton combed',
    jumlah: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // FormSubmit API endpoint
    const formActionUrl = 'https://formsubmit.co/your@email.com';
    const form = document.createElement('form');
    form.action = formActionUrl;
    form.method = 'POST';

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formData[key];
        form.appendChild(input);
      }
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="container">
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            className="form-control"
            value={formData.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomorTelpon">Nomor Telpon</label>
          <input
            type="text"
            id="nomorTelpon"
            name="nomorTelpon"
            className="form-control"
            value={formData.nomorTelpon}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="produk">Produk</label>
          <select
            id="produk"
            name="produk"
            className="form-control"
            value={formData.produk}
            onChange={handleChange}
          >
            <option value="cotton combed">Cotton Combed</option>
            <option value="cotton artisan">Cotton Artisan</option>
            <option value="cotton carded">Cotton Carded</option>
            <option value="cvc">CVC</option>
            <option value="double face">Double Face</option>
            <option value="enzyme">Enzyme</option>
            <option value="fleece">Fleece</option>
            <option value="hyget">Hyget</option>
            <option value="lacoste">Lacoste</option>
            <option value="misty">Misty</option>
            <option value="pe">PE</option>
            <option value="polymesh">Polymesh</option>
            <option value="printing">Printing</option>
            <option value="rayon">Rayon</option>
            <option value="tc">TC</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="jumlah">Jumlah (in kg)</label>
          <input
            type="number"
            id="jumlah"
            name="jumlah"
            className="form-control"
            value={formData.jumlah}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default OrderForm;
