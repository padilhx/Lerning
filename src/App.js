import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import FooterContent from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
      <FooterContent />
    </>
  );
}

export default App;
