import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Header from "./components/Navbar";
import AddContributor from "./components/AddContributor";
import ContributorListContainer from "./components/ContributorListContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <AddContributor/>
      <hr/>
      <ContributorListContainer/>
    </div>
  );
}

export default App;
