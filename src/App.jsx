import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/Item/Item";
import Layout from "./components/Layout/Layout";

function App() {
  return(
    <Layout>
    <ItemListContainer greeting={"Bienvenidos a LiberArt"} />
  </Layout>

  )
}

export default App;
