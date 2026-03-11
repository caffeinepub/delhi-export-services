import { Globe, Heart, Leaf, Users } from "lucide-react";

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey of passion, tradition, and the pursuit of the perfect cup
            of tea.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              The Beginning
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Serenity Tea was born from a simple belief: that tea is more than
              just a beverage—it's a moment of peace, a connection to nature,
              and a celebration of craftsmanship. Our founders traveled across
              Asia, visiting remote tea gardens and learning from master tea
              makers who have perfected their craft over generations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What started as a personal quest to find the world's finest teas
              has grown into a mission to share these exceptional experiences
              with tea lovers everywhere. We believe that every cup should be a
              journey—a moment to pause, reflect, and savor the simple pleasures
              of life.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Serenity Tea, we are committed to sourcing only the highest
              quality teas while supporting sustainable farming practices and
              fair trade principles. We work directly with small-scale farmers
              and cooperatives, ensuring that every purchase supports the
              communities that make our teas possible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our dedication to quality extends beyond the leaf itself. From
              careful selection and expert blending to thoughtful packaging and
              customer service, we strive for excellence in every aspect of what
              we do. We want every interaction with Serenity Tea to be as
              memorable as the teas we offer.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-center text-foreground mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Quality First
              </h3>
              <p className="text-sm text-muted-foreground">
                We never compromise on the quality of our teas, selecting only
                the finest leaves.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Community
              </h3>
              <p className="text-sm text-muted-foreground">
                Supporting the farmers and communities that cultivate our
                exceptional teas.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Sustainability
              </h3>
              <p className="text-sm text-muted-foreground">
                Committed to environmentally responsible practices at every
                step.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/20 mb-4">
                <Heart className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Passion</h3>
              <p className="text-sm text-muted-foreground">
                Every cup is crafted with love and dedication to the art of tea.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Join Our Tea Community
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover the perfect tea for every moment. Explore our collection
            and experience the difference that quality and care can make.
          </p>
          <a
            href="/products"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-soft"
          >
            Explore Our Teas
          </a>
        </div>
      </div>
    </div>
  );
}
