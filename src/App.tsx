import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Manager from './pages/Manager';
import Reviews from './pages/Reviews';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import Match from './pages/Match';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="manager" element={<Manager />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="notices" element={<Notices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="match" element={<Match />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
