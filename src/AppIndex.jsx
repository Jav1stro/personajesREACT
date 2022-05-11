import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Navbar from './Navbar/Navbar';

function AppIndex() {
  return (
    <div className="App">
     
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default AppIndex;

