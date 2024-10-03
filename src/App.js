import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';

function App() {
  return (
    <div className="App">
      <Header />
      <Mentions />
      <Footer />
    </div>
  );
}

export default App;