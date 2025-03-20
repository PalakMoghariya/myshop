import React, { useState } from 'react';
import { Sun, Moon, ShoppingCart as CartIcon } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products } from './data/products';

const Layout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <nav className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">StyleStore</h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {darkMode ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
                >
                  <CartIcon className="h-5 w-5 dark:text-white" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveFromCart={removeFromCart}
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <main>
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={(product) => addToCart(product)}
                />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;