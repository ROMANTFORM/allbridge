
import './App.css';

// Components
import Header from './components/header';
import Main from './components/main';
import Info from './components/info';
import Awards from './components/awards';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Info />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
