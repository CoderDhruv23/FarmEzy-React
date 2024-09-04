import Layout from '../../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-600 mb-8">About FarmEzy</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4">
            FarmEzy is a revolutionary platform connecting farmers directly with consumers. Our mission is to empower local farmers and provide fresh, high-quality produce to customers while eliminating unnecessary middlemen.
          </p>
          <p className="mb-4">
            Founded in 2023, FarmEzy aims to create a sustainable and fair marketplace for agricultural products. We believe in supporting local communities, promoting sustainable farming practices, and ensuring that both farmers and consumers benefit from our platform.
          </p>
          <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Supporting local farmers and communities</li>
            <li>Promoting sustainable and ethical farming practices</li>
            <li>Providing fresh, high-quality produce to consumers</li>
            <li>Ensuring fair prices for both farmers and customers</li>
            <li>Reducing food waste and improving supply chain efficiency</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}