import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Capabilities from './components/Capabilities'
import More from './components/More';
import Integration from './components/Integration'
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <Capabilities></Capabilities>
    <More></More>
    <Integration></Integration>
    <FAQ></FAQ>
    <Pricing></Pricing>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  );
}

export default App;
