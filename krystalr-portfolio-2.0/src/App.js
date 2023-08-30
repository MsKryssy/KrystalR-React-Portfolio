import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './Page';

const pages = ["About", "Portfolio", "Contact", "Resume"];
// you will be able to switch between them by creating this

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
   <div className="wrapper">
    <Header
      pages={ pages }
      currentPage={ currentPage } 
      setCurrentPage={ setCurrentPage }
    />
    <main>
      <Page currentPage={ setCurrentPage } />
    </main>
    <Footer />
   </div>
  );
}

export default App;
