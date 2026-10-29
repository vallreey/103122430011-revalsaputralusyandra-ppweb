import { useState } from "react";
import RingkasanPeserta from "./components/RingkasanPeserta.jsx";
import FormPeserta from "./components/FormPeserta.jsx";
import FilterPeserta from "./components/FilterPeserta.jsx";
import DaftarPeserta from "./components/DaftarPeserta.jsx";

const dataAwal = [
  { id: "m-1", nama: "Ani", nim: "10121001", kelas: "TI-2A", hadir: true },
  { id: "m-2", nama: "Budi", nim: "10121002", kelas: "TI-2B", hadir: false },
  { id: "m-3", nama: "Citra", nim: "10121003", kelas: "TI-2A", hadir: false },
];

function App() {
  const [peserta, setPeserta] = useState(dataAwal);
  const [idBerikut, setIdBerikut] = useState(4);
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [kelas, setKelas] = useState("");
  const [idEdit, setIdEdit] = useState(null);
  const [pencarian, setPencarian] = useState("");
  const [filterKelas, setFilterKelas] = useState("semua");
  const [pesan, setPesan] = useState("");

  const kataCari = pencarian.trim().toLowerCase();

  const hasil = peserta.filter((p) => {
    const cocokCari =
      kataCari === "" ||
      p.nama.toLowerCase().includes(kataCari) ||
      p.nim.includes(kataCari);
    const cocokKelas = filterKelas === "semua" || p.kelas === filterKelas;
    return cocokCari && cocokKelas;
  });

  function kosongkanForm() {
    setNama("");
    setNim("");
    setKelas("");
    setIdEdit(null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const namaRapi = nama.trim();
    const nimRapi = nim.trim();

    if (namaRapi.length < 3) {
      setPesan("Nama wajib diisi dan minimal 3 karakter.");
      return;
    }

    if (!/^\d{8}$/.test(nimRapi)) {
      setPesan("NIM wajib terdiri atas tepat 8 digit angka.");
      return;
    }

    if (kelas === "") {
      setPesan("Kelas wajib dipilih.");
      return;
    }

    const nimDipakai = peserta.some(
      (p) => p.nim === nimRapi && p.id !== idEdit
    );

    if (nimDipakai) {
      setPesan("NIM sudah digunakan peserta lain.");
      return;
    }

    if (idEdit === null) {
      const pesertaBaru = {
        id: "m-" + idBerikut,
        nama: namaRapi,
        nim: nimRapi,
        kelas: kelas,
        hadir: false,
      };
      setPeserta([...peserta, pesertaBaru]);
      setIdBerikut(idBerikut + 1);
    } else {
      setPeserta(
        peserta.map((p) =>
          p.id === idEdit
            ? { ...p, nama: namaRapi, nim: nimRapi, kelas: kelas }
            : p
        )
      );
    }

    setPesan("");
    kosongkanForm();
  }

  function handleEdit(id) {
    const target = peserta.find((p) => p.id === id);
    setNama(target.nama);
    setNim(target.nim);
    setKelas(target.kelas);
    setIdEdit(id);
    setPesan("");
  }

  function handleBatal() {
    setPesan("");
    kosongkanForm();
  }

  function handleHapus(id) {
    setPeserta(peserta.filter((p) => p.id !== id));
    if (idEdit === id) {
      setPesan("");
      kosongkanForm();
    }
  }

  function handleKehadiran(id) {
    setPeserta(
      peserta.map((p) => (p.id === id ? { ...p, hadir: !p.hadir } : p))
    );
  }

  return (
    <div className="container">
      <h1>Aplikasi Manajemen Peserta Praktikum</h1>

      <RingkasanPeserta peserta={peserta} hasil={hasil} />

      <FormPeserta
        nama={nama}
        nim={nim}
        kelas={kelas}
        modeEdit={idEdit !== null}
        pesan={pesan}
        onNamaChange={setNama}
        onNimChange={setNim}
        onKelasChange={setKelas}
        onSubmit={handleSubmit}
        onBatal={handleBatal}
      />

      <FilterPeserta
        pencarian={pencarian}
        filterKelas={filterKelas}
        onPencarianChange={setPencarian}
        onFilterKelasChange={setFilterKelas}
      />

      <DaftarPeserta
        hasil={hasil}
        adaData={peserta.length > 0}
        onEdit={handleEdit}
        onHapus={handleHapus}
        onKehadiran={handleKehadiran}
      />
    </div>
  );
}

export default App;
