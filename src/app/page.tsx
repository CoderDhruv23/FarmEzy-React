import Layout from '../components/Layout'
import Link from 'next/link'
import { ArrowRight, Truck, DollarSign, Sprout } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Welcome to FarmEzy</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">Connecting Farmers Directly to Consumers</p>
        <Link href="/products" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors inline-block">
          Shop Now
        </Link>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow-md">
              <img src={`/placeholder.svg?height=200&width=300`} alt="Product" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600 mb-2">$XX.XX per kg</p>
                <Link href="/products/1" className="text-orange-500 hover:underline flex items-center">
                  View Product <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">Why Choose FarmEzy?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Truck className="mx-auto h-12 w-12 text-orange-500 mb-4" />
            <h3 className="font-semibold mb-2">Fresh Delivery</h3>
            <p className="text-gray-600">Get fresh produce delivered directly from farms to your doorstep.</p>
          </div>
          <div className="text-center">
            <DollarSign className="mx-auto h-12 w-12 text-orange-500 mb-4" />
            <h3 className="font-semibold mb-2">Fair Prices</h3>
            <p className="text-gray-600">Farmers get better prices, and consumers pay less without middlemen.</p>
          </div>
          <div className="text-center">
            <Sprout className="mx-auto h-12 w-12 text-orange-500 mb-4" />
            <h3 className="font-semibold mb-2">Support Local Farmers</h3>
            <p className="text-gray-600">Help local farmers thrive by buying directly from them.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}