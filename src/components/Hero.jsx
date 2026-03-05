export default function Hero() {
  const scrollToShop = () => {
    const element = document.getElementById('shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-ultra leading-none">
            MØNARC
          </h1>
          <p className="text-lg md:text-xl tracking-widest uppercase text-monarc-accent">
            Built in silence.
          </p>
        </div>

        <p className="text-base md:text-lg text-monarc-text-secondary max-w-2xl mx-auto leading-relaxed">
          Where form meets function in the shadows. Architectural precision crafted for those who move through the world quietly.
        </p>

        <button
          onClick={scrollToShop}
          className="group relative inline-block"
        >
          <span className="relative inline-block px-12 py-4 border-2 border-monarc-text text-monarc-text tracking-widest uppercase text-sm font-medium transition-all duration-300 hover:bg-monarc-text hover:text-monarc-black">
            Enter the Archive
          </span>
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-monarc-text-secondary to-transparent" />
      </div>
    </section>
  );
}
