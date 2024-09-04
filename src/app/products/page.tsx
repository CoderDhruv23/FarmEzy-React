'use client'

import Layout from '../../components/Layout'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const dummyProducts = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    price: 2.99,
    category: 'Vegetables',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg', // Add the image URL here
  },
  { id: 2, name: 'Organic Apples', price: 3.99, category: 'Fruits', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 3, name: 'Free-range Eggs', price: 4.99, category: 'Dairy', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 4, name: 'Whole Wheat Bread', price: 2.49, category: 'Bakery', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 5, name: 'Organic Milk', price: 3.49, category: 'Dairy', imageUrl: '/placeholder.svg?height=200&width=300' },
  { id: 6, name: 'Fresh Spinach', price: 1.99, category: 'Vegetables', imageUrl: '/placeholder.svg?height=200&width=300' },
]

const categories = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Bakery']

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? dummyProducts
    : dummyProducts.filter(product => product.category === selectedCategory)

  return (
    <Layout>
      <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-6">Our Products</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-sm md:text-base rounded-full ${
              selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)} per unit</p>
              <Link href={`/products/${product.id}`} className="text-orange-500 hover:underline flex items-center">
                View Product <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
