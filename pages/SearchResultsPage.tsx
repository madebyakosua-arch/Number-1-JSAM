
import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { ALL_PRODUCTS } from '../constants';

interface SearchResultsPageProps {
  query: string;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ query }) => {
  const filteredProducts = React.useMemo(() => {
    if (!query) {
      return [];
    }
    const lowercasedQuery = query.toLowerCase();
    return ALL_PRODUCTS.filter(
      product =>
        product.name.toLowerCase().includes(lowercasedQuery) ||
        product.category.toLowerCase().includes(lowercasedQuery)
    );
  }, [query]);

  if (!query) {
      return (
          <div className="text-center py-24 px-4">
              <h1 className="text-2xl font-bold text-gray-800">Please enter a search term</h1>
              <p className="text-gray-600 mt-2">Find your favorite UK standard appliances.</p>
          </div>
      )
  }

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <ProductGrid title={`Search Results for &quot;${query}&quot;`} products={filteredProducts} />
      ) : (
        <div className="text-center py-24 px-4">
          <h1 className="text-2xl font-bold text-gray-800">No results found for &quot;{query}&quot;</h1>
          <p className="text-gray-600 mt-2">Please try a different search term or browse our best sellers.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
