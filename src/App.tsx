import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Watch from '@/pages/Watch';
import Manga from '@/pages/Manga';
import News from '@/pages/News';
import Upcoming from '@/pages/Upcoming';
import Contact from '@/pages/Contact';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="anime-hub-theme">
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch" element={<Watch />} />
              <Route path="/manga" element={<Manga />} />
              <Route path="/news" element={<News />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;