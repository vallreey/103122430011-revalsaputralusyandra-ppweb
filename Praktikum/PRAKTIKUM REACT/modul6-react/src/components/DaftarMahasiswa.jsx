import { useState } from "react";
import CardMahasiswa from './CardMahasiswa'

function DaftarMahasiswa() {
  const mahasiswa = [
    { id: 1, nama: "Revalsa", nim: "103122430011" },
    { id: 2, nama: "Cheval", nim: "103122430012" },
    { id: 3, nama: "Haru", nim: "103122430013" }
  ]

  const [daftarMahasiswa, setDaftarMahasiswa] = useState(mahasiswa)
  const [namaBaru, setNamaBaru] = useState('')
  const [nimBaru, setNimBaru] = useState('')

  const tambahMahasiswa = () => {
    if (namaBaru === '' || nimBaru === '') return

    const mahasiswaBaru = {
      id: Date.now(),
      nama: namaBaru,
      nim: nimBaru
    }

    setDaftarMahasiswa([...daftarMahasiswa, mahasiswaBaru])
    setNamaBaru('')
    setNimBaru('')
  }

  return (
    <div>
      <h2>Daftar Mahasiswa</h2>
      <input
        placeholder="Nama"
        value={namaBaru}
        onChange={(e) => setNamaBaru(e.target.value)}
      />
      <input
        placeholder="NIM"
        value={nimBaru}
        onChange={(e) => setNimBaru(e.target.value)}
      />
      <button onClick={tambahMahasiswa}>Tambah</button>
      <div>
        {daftarMahasiswa.map((mhs) => (
          <CardMahasiswa key={mhs.id} nama={mhs.nama} nim={mhs.nim} />
        ))}
      </div>
    </div>
  )
}

export default DaftarMahasiswa