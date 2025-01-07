
import React from 'react';

const products = [
    { id: 1, name: 'BREMBO SPORT BRAKES', price: 'Kes.2,000.00', image: '/images/brake.png' },
    { id: 2, name: 'USB AIR COMPRESSOR', price: 'Kes.2,000.00', image: '/images/compressor.png' },
    { id: 3, name: 'NINJA SOUND', price: 'Kes.2,000.00', image: '/images/speaker.png' },
    { id: 4, name: 'Air Filter', price: 'Kes.900.00', image: '/images/filter.png' },
    { id: 5, name: 'Car Mats for BMW', price: 'Kes.900.00', image: '/images/mats.png' },
];

const mostRated = [
    { id: 2, name: 'USB Air Compressor', price: 'Kes.500.00', image: '/images/compressor.png' },
    { id: 3, name: 'Ninja Sound', price: 'Kes.800.00', image: '/images/speaker.png' },
    { id: 5, name: 'Car mats for BMW', price: 'Kes.900.00', image: '/images/mats.png' },
];

const Shop = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold mb-8 text-center">Shop</h1>

                <div className="lg:flex lg:space-x-6">
                    {/* Product Grid Section */}
                    <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-red-500 text-xl mt-2">{product.price}</p>
                                    <div className="mt-4">
                                        <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Aside Section */}
                    <aside className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md mt-8 lg:mt-0">
                        <h2 className="text-2xl font-semibold mb-6">Latest Products</h2>
                        <div className="space-y-4">
                            {mostRated.map((product) => (
                                <div key={product.id} className="flex items-center space-x-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h3 className="text-lg font-medium">{product.name}</h3>
                                        <p className="text-red-500 font-semibold">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Shop;
