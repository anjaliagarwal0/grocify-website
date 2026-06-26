import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import productList from '../ProductList/ProductList'
import { Link } from 'react-router-dom'
import Cards from '../Cards/Cards'

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']

    // Default tab set to All
    const [activeTab, setActiveTab] = useState('All')

    // Filter products based on selected category
    const filteredItems =
        activeTab === 'All'
            ? productList
            : productList.filter(item => item.category === activeTab)

    // Render first 8 products
    const renderCards = filteredItems.map(product => (
        <Cards
            key={product.id} // Make sure each product has a unique id
            image={product.image}
            name={product.name}
            price={product.price}
        />
    ))

    return (
        <section>
            <div className="max-w-350 mx-auto px-10 py-20">
                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mt-10">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-5 py-2 text-lg rounded-lg cursor-pointer transition-all duration-300 ${
                                activeTab === category
                                    ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white'
                                    : 'bg-zinc-100 hover:bg-zinc-200'
                            }`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Listing */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
                    {renderCards}
                </div>

                {/* View All Button */}
                <div className="mt-15 mx-auto w-fit">
                    <Link
                        to="/allproducts"
                        className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Products