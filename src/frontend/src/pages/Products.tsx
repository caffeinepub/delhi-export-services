import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Green Tea",
      description:
        "Delicate and refreshing, our green tea is sourced from the misty mountains of Japan. Rich in antioxidants with a smooth, grassy flavor.",
      price: 24.99,
      image: "/assets/generated/tea-leaves.dim_800x600.png",
    },
    {
      id: 2,
      name: "Classic Black Tea",
      description:
        "Bold and robust, this full-bodied black tea from Assam delivers a rich, malty flavor perfect for morning or afternoon.",
      price: 19.99,
      image: "/assets/generated/tea-set.dim_600x600.png",
    },
    {
      id: 3,
      name: "Oolong Tea",
      description:
        "A perfect balance between green and black tea, our oolong offers complex floral notes with a smooth finish.",
      price: 29.99,
      image: "/assets/generated/tea-pour.dim_800x800.png",
    },
    {
      id: 4,
      name: "White Tea",
      description:
        "The most delicate of all teas, white tea features subtle sweetness and a light, refreshing character.",
      price: 34.99,
      image: "/assets/generated/tea-leaves.dim_800x600.png",
    },
    {
      id: 5,
      name: "Jasmine Pearl Tea",
      description:
        "Hand-rolled green tea pearls infused with fresh jasmine blossoms, creating an aromatic and elegant brew.",
      price: 39.99,
      image: "/assets/generated/tea-set.dim_600x600.png",
    },
    {
      id: 6,
      name: "Earl Grey",
      description:
        "A timeless classic featuring premium black tea infused with natural bergamot oil for a citrusy, aromatic experience.",
      price: 22.99,
      image: "/assets/generated/tea-pour.dim_800x800.png",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Tea Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of premium teas from around
            the world. Each variety is chosen for its exceptional quality and
            unique character.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our tea experts are here to help you find the perfect blend for your
            taste preferences.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
