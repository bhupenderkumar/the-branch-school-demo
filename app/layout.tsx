import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Branch School',
  description: 'The Branch School is a private school in Houston, TX, dedicated to fostering a love of learning in its students. Our experienced faculty and staff provide a supportive environment that encourages academic excellence, creativity, and personal growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="demo-banner">
          This is a demo website built for The Branch School by EduConnect.
          Want this for your school? Call +91-9717267473
        </div>
        <nav className="navbar">
          <a href="/" className="logo">The Branch School</a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/programs">Programs</a>
            <a href="/contact">Contact</a>
            <a href="/download" className="cta-btn">Get Parent App</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; 2026 The Branch School. Demo by EduConnect.</p>
        </footer>
      </body>
    </html>
  );
}
