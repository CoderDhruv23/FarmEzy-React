import Layout from '../../components/Layout'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Vegetables', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Fruits', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Dairy', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Grains', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Meat', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Herbs', image: '/placeholder.svg?height=200&width=300' },
]

export default function Categories() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-600 mb-8">Product Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <Link href={`/products?category=${category.name.toLowerCase()}`} className="text-orange-500 hover:underline flex items-center">
                  View Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}