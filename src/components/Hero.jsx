import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <ShoppingBag className="mx-auto mb-6 h-16 w-16" />
          <h1 className="text-5xl font-bold mb-4">Welcome to StyleStore</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our curated collection of premium fashion and accessories.
            Shop the latest trends with confidence.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;