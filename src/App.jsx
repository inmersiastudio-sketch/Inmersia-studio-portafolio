import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>ARCHVR Studio | VR/AR for Architects</title>
        <meta
          name="description"
          content="High-end VR/AR experiences that bring architectural blueprints to life. Specializing in immersive visualization for architects and developers."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FAFAF9]">
        <Header />
        <main>
          <Hero />
          <Proyectos />
          <Servicios />
          <SobreMi />
          <Contacto />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
