import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

const ProductGrid = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            {t.ourCollection}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.chooseYour} <span className="text-primary">{t.flavor}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.collectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
