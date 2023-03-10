import './App.css';
import About from './components/about/About';
import Book from './components/book/Book';
import Enquiry from './components/enquiry/Enquiry';
import Estimate from './components/estimate/Estimate';
import Faq from './components/faq/Faq';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Form />
      <Header />
      <Estimate />
      <About />
      <Features />
      <Book />
      <Faq />
      <Enquiry />
      <Footer />
    </div>
  );
}

export default App;
