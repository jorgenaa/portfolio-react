
import './sass/styles.scss';

//Components
import Header from './components/header/Header';
import Home from './components/main/Home';
import About from './components/main/About';
import Skills from './components/main/Skills';
import Portfolio from './components/main/portfolio/Portfolio';
import Contact from './components/main/contact/Contact';
import Footer from './components/footer/Footer';

const App: React.FC = ()=> {
 
  return (
          <div className="container">
            <div className="wrapper">
              <Header />
              <Home />
              <About />
              <Skills  />
              <Portfolio  />
              <Contact />
            </div>
            <Footer />
          </div>
  );
}

export default App;
