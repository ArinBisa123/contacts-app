import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Homepage from "../pages/Homepage";
import AddPage from "../pages/AddPage";

function ContactApp() {
  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContactApp;
