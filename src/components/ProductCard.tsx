import { Plus } from 'lucide-react';
import { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const colorClasses: Record<string, string> = {
    apple: 'bg-apple/10 border-apple/30',
    strawberry: 'bg-strawberry/10 border-strawberry/30',
    natural: 'bg-natural/10 border-natural/30',
  };

  const accentClasses: Record<string, string> = {
    apple: 'bg-apple hover:bg-apple/90',
    strawberry: 'bg-strawberry hover:bg-strawberry/90',
    natural: 'bg-brand hover:bg-brand/90',
  };

  const flavorTranslations: Record<string, string> = {
    'Natural': t.natural,
    'Apple': t.apple,
    'Strawberry': t.strawberry,
  };

  const descriptionTranslations: Record<string, string> = {
    'Natural': t.naturalDesc,
    'Apple': t.appleDesc,
    'Strawberry': t.strawberryDesc,
  };

  return (
    <div className="product-card group">
      <div className={`absolute inset-0 rounded-2xl ${colorClasses[product.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative">
        <div className="aspect-[3/4] flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name} ${product.flavor}`}
            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Aqua Naturale
          </p>
          <h3 className="text-2xl font-bold text-foreground">{flavorTranslations[product.flavor] || product.flavor}</h3>
          <p className="text-muted-foreground text-sm">{descriptionTranslations[product.flavor]}</p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <span className="text-2xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-primary-foreground font-semibold transition-all duration-300 active:scale-95 ${accentClasses[product.color]}`}
          >
            <Plus className="w-4 h-4" />
            {t.add}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
