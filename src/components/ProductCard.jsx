import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateWhatsAppLink = () => {
    const message = `Hola, estoy interesado en el ${product.name} con el precio de $${product.price} de MØNARC.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${3016505474}?text=${encodedMessage}`;
  };

  const getAvailabilityLabel = () => {
    if (product.availability === 'in_stock') return 'In Stock';
    if (product.availability === 'low_stock') return 'Limited';
    return 'Sold Out';
  };

  return (
    <>
      <div className="group cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <div className="relative aspect-[3/4] overflow-hidden bg-monarc-secondary mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-monarc-black/0 group-hover:bg-monarc-black/10 transition-all duration-300" />

          {product.availability === 'low_stock' && (
            <div className="absolute top-4 right-4 bg-monarc-accent/90 backdrop-blur-sm px-3 py-1 text-xs tracking-wider text-monarc-black">
              LIMITED
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm tracking-widest uppercase font-medium">
            {product.name}
          </h3>
          <p className="text-monarc-text-secondary text-sm">
            ${product.price}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-monarc-black/95 backdrop-blur-sm p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-monarc-secondary max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="aspect-[3/4] overflow-hidden bg-monarc-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="ml-auto block text-monarc-text-secondary hover:text-monarc-text transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif tracking-wider">
                      {product.name}
                    </h2>
                    <p className="text-2xl text-monarc-accent">${product.price}</p>
                    <p className="text-sm tracking-wider uppercase text-monarc-text-secondary">
                      {getAvailabilityLabel()}
                    </p>
                  </div>

                  <p className="text-monarc-text-secondary leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-monarc-text-secondary/20">
                    <p className="text-xs tracking-wider uppercase text-monarc-text-secondary mb-2">
                      Category
                    </p>
                    <p className="text-sm tracking-wider uppercase">
                      {product.category}
                    </p>
                  </div>
                </div>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border-2 border-monarc-text py-4 px-8 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-monarc-text hover:text-monarc-black"
                >
                  Adquirir via Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
