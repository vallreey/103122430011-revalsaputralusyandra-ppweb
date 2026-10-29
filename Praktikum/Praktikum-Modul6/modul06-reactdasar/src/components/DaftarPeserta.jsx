import ItemPeserta from "./ItemPeserta.jsx";

function DaftarPeserta({ hasil, adaData, onEdit, onHapus, onKehadiran }) {
  if (!adaData) {
    return <p className="kosong">Belum ada peserta</p>;
  }

  if (hasil.length === 0) {
    return <p className="kosong">Peserta tidak ditemukan</p>;
  }

  return (
    <ul className="daftar">
      {hasil.map((p) => (
        <ItemPeserta
          key={p.id}
          peserta={p}
          onEdit={onEdit}
          onHapus={onHapus}
          onKehadiran={onKehadiran}
        />
      ))}
    </ul>
  );
}

export default DaftarPeserta;
