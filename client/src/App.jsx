// styles and libraries
import './css/style.css';

// components
import Navbar from './components/Navbar';
import Routing from './components/Routing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="mainContent">
        <main>
          <Routing />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
