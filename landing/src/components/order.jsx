import React, { useState } from 'react';

export const Order = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div id="order" style={styles.container}>
      <h2 style={styles.header}>Pesan Sekarang</h2>
      <form action="https://formsubmit.co/chris.samuelten@gmail.com" method="POST" style={styles.form}>
        <label htmlFor="nama" style={styles.label}>Nama:</label>
        <input type="text" id="nama" name="nama" required style={styles.input} />

        <label htmlFor="nomorTelpon" style={styles.label}>Nomor Telpon:</label>
        <input type="tel" id="nomorTelpon" name="nomorTelpon" required style={styles.input} />  

        <label htmlFor="email" style={styles.label}>Email:</label>
        <input type="email" id="email" name="email" required style={styles.input} />

        <label htmlFor="produk" style={styles.label}>Pilih Produk:</label>
        <select id="produk" name="produk" required style={styles.select}>
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

        <label htmlFor="jumlah" style={styles.label}>Jumlah/kg:</label>
        <input type="number" id="jumlah" name="jumlah" min="1" required style={styles.input} />

        <label htmlFor="alamatKirim" style={styles.label}>Alamat Kirim:</label>
        <input type="text" id="alamatKirim" name="alamatKirim" required style={styles.input} />

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
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  header: {
    marginBottom: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    border: '2px solid transparent', // Maintain border size
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
  },
  select: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 15px',
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

export default Order;
