import CardMahasiswa from './components/CardMahasiswa';
import Counter from './components/Counter';
import DaftarMahasiswa from './components/DaftarMahasiswa';

function App() {
  return (
    <>
      <CardMahasiswa nama="Revalsa" nim="103122430011"/>
      <CardMahasiswa nama="Cheval" nim="103122430012"/>
      <CardMahasiswa nama="Haru" nim="103122430013"/> 
      <Counter />
      <DaftarMahasiswa />
    </>
  )
}

export default App;
