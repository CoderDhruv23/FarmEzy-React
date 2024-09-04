'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, ShoppingCart, User, Menu, X } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Leaf className="mr-2" />
            FarmEzy
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/products" className="hover:text-orange-300">Products</Link>
            <Link href="/categories" className="hover:text-orange-300">Categories</Link>
            <Link href="/about" className="hover:text-orange-300">About</Link>
            <Link href="/contact" className="hover:text-orange-300">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="hover:text-orange-300">
              <ShoppingCart />
            </Link>
            <Link href="/auth" className="hover:text-orange-300">
              <User />
            </Link>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-green-600 text-white">
          <nav className="container mx-auto py-4 flex flex-col space-y-2">
            <Link href="/products" className="hover:text-orange-300 px-4 py-2">Products</Link>
            <Link href="/categories" className="hover:text-orange-300 px-4 py-2">Categories</Link>
            <Link href="/about" className="hover:text-orange-300 px-4 py-2">About</Link>
            <Link href="/contact" className="hover:text-orange-300 px-4 py-2">Contact</Link>
          </nav>
        </div>
      )}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-green-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 FarmEzy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}