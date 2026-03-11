export default function Footer() {
  return (
    <footer className="bg-monarc-secondary py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif tracking-widest">MØNARC</h3>
            <p className="text-sm text-monarc-text-secondary leading-relaxed">
              Architectural fashion for those who move in silence.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-ultra uppercase text-monarc-text-secondary mb-4">
              Navegar
            </h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#shop"
                className="text-sm hover:text-monarc-accent transition-colors duration-300"
              >
                Tienda
              </a>
              <a
                href="#philosophy"
                className="text-sm hover:text-monarc-accent transition-colors duration-300"
              >
                Nosotros
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-monarc-accent transition-colors duration-300"
              >
                Contacto
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-ultra uppercase text-monarc-text-secondary mb-4">
              Connect   
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/monarc.co_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-monarc-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/nothingyet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-monarc-accent transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
            <div className="pt-4">
              <a
                href="mailto:monarc.wearco@gmail.com"
                className="text-sm text-monarc-text-secondary hover:text-monarc-accent transition-colors duration-300"
              >
                monarc.wearco@gmail.com

              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-monarc-text-secondary/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-monarc-text-secondary">
          <p>&copy; {new Date().getFullYear()} MØNARC. All rights reserved.</p>
          <p className="tracking-wider">BUILT IN SILENCE.</p>
        </div>
      </div>
    </footer>
  );
}
