import { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

export default function FeaturedCollection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <section id="shop" className="py-24 px-6 lg:px-12 bg-monarc-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif tracking-widest">
            THE ARCHIVE
          </h2>
          <p className="text-monarc-text-secondary tracking-wider">
            Catalogo No. 1
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search pieces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-monarc-secondary border border-monarc-text-secondary/20 px-6 py-4 text-sm tracking-wider placeholder:text-monarc-text-secondary/50 focus:outline-none focus:border-monarc-accent transition-colors"
            />
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-monarc-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-monarc-text text-monarc-black'
                      : 'bg-monarc-secondary text-monarc-text hover:bg-monarc-text-secondary/20'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-monarc-secondary border border-monarc-text-secondary/20 px-6 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-monarc-accent transition-colors cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-monarc-text-secondary text-lg tracking-wider">
              No pieces found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
