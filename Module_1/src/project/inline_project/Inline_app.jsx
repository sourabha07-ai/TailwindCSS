import ProductCard from './ProductCard'


const Inline_app = () => {
     const sampleProduct = {
    name: "Wireless Headphones",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    price: "199.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
  };

  return (
  <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <ProductCard product={sampleProduct} />
    </div>
  )
}

export default Inline_app
