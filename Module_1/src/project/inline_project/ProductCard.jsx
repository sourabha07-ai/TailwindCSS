import './Inline_appCss.css'

function ProductCard({ product }) {
    return (
        <div
            style={{
                width: "300px",

                border: "1px solid #e0e0e0",

                borderRadius: "12px",

                overflow: "hidden",

                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

                transition: "transform 0.2s ease, box-shadow 0.2s ease",

                cursor: "pointer",

                backgroundColor: "white",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";

                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";

                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
        >
            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: "100%",

                    height: "200px",

                    objectFit: "cover",
                }}
            />

            <div
                style={{
                    padding: "16px",
                }}
            >
                {/* Content of the div */}
                <h3
                    style={{
                        margin: "0 0 8px 0",

                        fontSize: "18px",

                        fontWeight: "600",

                        color: "#333",
                    }}
                >
                    {product.name}
                </h3>

                <p
                    style={{
                        margin: "0 0 12px 0",

                        color: "#666",

                        fontSize: "14px",

                        lineHeight: "1.4",
                    }}
                >
                    {product.description}
                </p>

                <div
                    style={{
                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",
                    }}
                >
                    {/* Content of the div */}
                    <span
                        style={{
                            fontSize: "20px",

                            fontWeight: "bold",

                            color: "#2c3e50",
                        }}
                    >
                        ${product.price}
                    </span>
                    <button
                        style={{
                            backgroundColor: "#007bff",

                            color: "white",

                            border: "none",

                            padding: "8px 16px",

                            borderRadius: "6px",

                            cursor: "pointer",

                            fontSize: "14px",

                            fontWeight: "500",

                            transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#0056b3";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#007bff";
                        }}
                        onClick={() => alert(`Added ${product.name} to cart!`)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
