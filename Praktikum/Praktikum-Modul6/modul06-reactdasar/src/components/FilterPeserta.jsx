function FilterPeserta({
  pencarian,
  filterKelas,
  onPencarianChange,
  onFilterKelasChange,
}) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Cari nama atau NIM"
        value={pencarian}
        onChange={(e) => onPencarianChange(e.target.value)}
      />
      <select
        value={filterKelas}
        onChange={(e) => onFilterKelasChange(e.target.value)}
      >
        <option value="semua">Semua kelas</option>
        <option value="TI-2A">TI-2A</option>
        <option value="TI-2B">TI-2B</option>
      </select>
    </div>
  );
}

export default FilterPeserta;
