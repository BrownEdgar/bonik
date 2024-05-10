import React from "react";
import Questions from "./components/Questions/Questions";
import DeliverySection from './components/DeliverySection/DeliverySection'
import Applications from "./components/Applications/Applications";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Questions />
      <Applications />
      <DeliverySection />
      <Footer />
    </div>
  );
}
