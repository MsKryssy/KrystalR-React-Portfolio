import React from "react";
import Header from "./components/Header";
import Page from "./Page";
import Footer from "./components/Footer";

const pages = ["About", "Portfolio", "Contact", "Resume"];
// you will be able to switch between them by creating this

function App() {
  const [currentPage, setCurrentPage] = React.useState("About");
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
