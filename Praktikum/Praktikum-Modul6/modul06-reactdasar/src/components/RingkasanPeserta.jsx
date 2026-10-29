function RingkasanPeserta({ peserta, hasil }) {
  const total = peserta.length;
  const hadir = peserta.filter((p) => p.hadir).length;
  const belumHadir = total - hadir;

  return (
    <div className="ringkasan">
      <div className="kotak-ringkasan">
        <span className="label">Total peserta</span>
        <strong className="angka">{total}</strong>
      </div>
      <div className="kotak-ringkasan">
        <span className="label">Hadir</span>
        <strong className="angka">{hadir}</strong>
      </div>
      <div className="kotak-ringkasan">
        <span className="label">Belum hadir</span>
        <strong className="angka">{belumHadir}</strong>
      </div>
      <div className="kotak-ringkasan">
        <span className="label">Hasil ditampilkan</span>
        <strong className="angka">{hasil.length}</strong>
      </div>
    </div>
  );
}

export default RingkasanPeserta;
