import { Route, Routes } from 'react-router-dom';
import Home from '../screens/HomePage';
import Contact from '../screens/ContactPage';
import About from '../screens/AboutPage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
