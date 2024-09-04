'use client'

import { useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { Trash2, Plus, Minus } from 'lucide-react'

const initialCartItems = [
  { id: 1, name: 'Fresh Tomatoes', price: 2.99, quantity: 2 },
  { id: 2, name: 'Organic Apples', price: 3.99, quantity: 1 },
  { id: 3, name: 'Free-range Eggs', price: 4.99, quantity: 3 },
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty. <Link href="/products" className="text-orange-500 hover:underline">Continue shopping</Link></p>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 bg-gray-200 rounded">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 bg-gray-200 rounded">
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}