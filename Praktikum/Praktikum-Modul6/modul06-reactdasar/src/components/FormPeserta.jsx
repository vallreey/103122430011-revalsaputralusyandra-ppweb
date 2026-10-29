function FormPeserta({
  nama,
  nim,
  kelas,
  modeEdit,
  pesan,
  onNamaChange,
  onNimChange,
  onKelasChange,
  onSubmit,
  onBatal,
}) {
  return (
    <form className="form-peserta" onSubmit={onSubmit}>
      <div className="baris-form">
        <label htmlFor="nama">Nama mahasiswa</label>
        <input
          id="nama"
          type="text"
          value={nama}
          onChange={(e) => onNamaChange(e.target.value)}
        />
      </div>

      <div className="baris-form">
        <label htmlFor="nim">NIM</label>
        <input
          id="nim"
          type="text"
          value={nim}
          onChange={(e) => onNimChange(e.target.value)}
        />
      </div>

      <div className="baris-form">
        <label htmlFor="kelas">Kelas</label>
        <select
          id="kelas"
          value={kelas}
          onChange={(e) => onKelasChange(e.target.value)}
        >
          <option value="">Pilih kelas</option>
          <option value="TI-2A">TI-2A</option>
          <option value="TI-2B">TI-2B</option>
        </select>
      </div>

      {pesan !== "" && <p className="pesan-error">{pesan}</p>}

      <button type="submit">
        {modeEdit ? "Simpan perubahan" : "Tambah peserta"}
      </button>
      {modeEdit && (
        <button type="button" className="tombol-batal" onClick={onBatal}>
          Batal
        </button>
      )}
    </form>
  );
}

export default FormPeserta;
