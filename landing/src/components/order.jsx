import React, { useState } from 'react';

const Order = () => {
  const [hover, setHover] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    nomorTelpon: '',
    email: '',
    alamatKirim: '',
    products: [{ produk: 'cotton combed', jumlah: '' }]
  });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'produk' || name === 'jumlah') {
      const updatedProducts = [...formData.products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        [name]: value
      };
      setFormData({
        ...formData,
        products: updatedProducts
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      products: [...formData.products, { produk: 'cotton combed', jumlah: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // FormSubmit API endpoint
    const formActionUrl = 'https://formsubmit.co/chris.samuelten@gmail.com';
    const form = document.createElement('form');
    form.action = formActionUrl;
    form.method = 'POST';

    // Add fields for personal information
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && key !== 'products') {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formData[key];
        form.appendChild(input);
      }
    }

    // Add fields for products
    formData.products.forEach((product, index) => {
      const { produk, jumlah } = product;
      const produkInput = document.createElement('input');
      produkInput.type = 'hidden';
      produkInput.name = `produk-${index}`;
      produkInput.value = produk;
      form.appendChild(produkInput);

      const jumlahInput = document.createElement('input');
      jumlahInput.type = 'hidden';
      jumlahInput.name = `jumlah-${index}`;
      jumlahInput.value = jumlah;
      form.appendChild(jumlahInput);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div id="order" style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Pesan Sekarang</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="nama" style={styles.label}>Nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={(e) => handleChange(e)}
            required
            style={styles.input}
          />

          <label htmlFor="nomorTelpon" style={styles.label}>Nomor Telpon:</label>
          <input
            type="tel"
            id="nomorTelpon"
            name="nomorTelpon"
            value={formData.nomorTelpon}
            onChange={(e) => handleChange(e)}
            required
            style={styles.input}
          />

          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
            style={styles.input}
          />

          {formData.products.map((product, index) => (
            <div key={index} style={styles.productContainer}>
              <label htmlFor={`produk-${index}`} style={styles.label}>Pilih Produk:</label>
              <select
                id={`produk-${index}`}
                name={`produk-${index}`}
                value={product.produk}
                onChange={(e) => handleChange(e, index)}
                required
                style={styles.select}
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
                <option value="PE">PE</option>
                <option value="polymesh">Polymesh</option>
                <option value="printing">Printing</option>
                <option value="rayon">Rayon</option>
                <option value="TC">TC</option>
              </select>

              <label htmlFor={`jumlah-${index}`} style={styles.label}>Jumlah/kg:</label>
              <input
                type="number"
                id={`jumlah-${index}`}
                name={`jumlah-${index}`}
                value={product.jumlah}
                onChange={(e) => handleChange(e, index)}
                min="1"
                required
                style={styles.input}
              />
            </div>
          ))}

          <div style={{ marginTop: '15px' }}>
            <button
              type="button"
              onClick={handleAddProduct}
              style={styles.button}
            >
              Tambah Produk
            </button>
          </div>

          <label htmlFor="alamatKirim" style={styles.label}>Alamat Kirim:</label>
          <input
            type="text"
            id="alamatKirim"
            name="alamatKirim"
            value={formData.alamatKirim}
            onChange={(e) => handleChange(e)}
            required
            style={styles.input}
          />

          <button
            type="submit"
            style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f2f2f2',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '500px',
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  header: {
    marginBottom: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  label: {
    display: 'block',
    marginTop: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  productContainer: {
    marginBottom: '10px',
  },
  button: {
    padding: '10px 15px',
    marginTop: '10px',
    backgroundColor: '#525a9d', // Purple base color
    color: 'white',
    border: '2px solid transparent', // Maintain border size
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s', // Remove border transition
  },
  buttonHover: {
    backgroundColor: 'white',
    color: '#525a9d',
    border: '2px solid #525a9d', // Maintain border size
  },
};

export {Order};
