
import React from "react";
import DeliverySection from './components/DeliverySection/DeliverySection'
import Applications from "./components/Applications/Applications";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Applications />
      <DeliverySection />
      <Footer />
    </div>
  );
}
