function ItemPeserta({ peserta, onEdit, onHapus, onKehadiran }) {
  return (
    <li className="item-peserta">
      <p className="nama">{peserta.nama}</p>
      <p>NIM: {peserta.nim}</p>
      <p>Kelas: {peserta.kelas}</p>
      <p>
        Status:{" "}
        <span className={peserta.hadir ? "status-hadir" : "status-belum"}>
          {peserta.hadir ? "Hadir" : "Belum hadir"}
        </span>
      </p>
      <div className="tindakan">
        <button type="button" onClick={() => onEdit(peserta.id)}>
          Edit
        </button>
        <button
          type="button"
          className="tombol-hapus"
          onClick={() => onHapus(peserta.id)}
        >
          Hapus
        </button>
        <button
          type="button"
          className="tombol-kehadiran"
          onClick={() => onKehadiran(peserta.id)}
        >
          {peserta.hadir ? "Batalkan hadir" : "Tandai hadir"}
        </button>
      </div>
    </li>
  );
}

export default ItemPeserta;
