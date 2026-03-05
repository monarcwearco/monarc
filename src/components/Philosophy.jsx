export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 lg:px-12 bg-monarc-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif tracking-wider leading-tight">
              Built in silence.
              <br />
              Worn with purpose.
            </h2>

            <div className="space-y-6 text-monarc-text-secondary leading-relaxed">
              <p>
                MØNARC exists in the space between visibility and anonymity. We create garments for those who understand that true luxury whispers rather than shouts.
              </p>
              <p>
                Each piece is an exercise in restraint—minimal details, maximum impact. We reject the ephemeral trends of fast fashion in favor of timeless architectural forms that serve as foundations for personal expression.
              </p>
              <p>
                Our process honors tradition while embracing innovation. Premium materials sourced with intention. Construction methods refined over decades. Designs that transcend seasonal cycles.
              </p>
              <p>
                This is fashion for the introspective. For those who move through the world with quiet confidence. For the architects of their own aesthetic.
              </p>
            </div>

            <div className="pt-8 border-t border-monarc-text-secondary/20">
              <p className="text-xs tracking-ultra uppercase text-monarc-text-secondary">
                Est. 2024 — Crafted for the discerning
              </p>
            </div>
          </div>

          <div className="aspect-[3/4] bg-monarc-black overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="MØNARC philosophy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
