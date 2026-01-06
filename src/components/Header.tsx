import { ShoppingCart, Droplets, Globe } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'cs' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
            <Droplets className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Aqua <span className="text-primary">Naturale</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            {t.home}
          </Link>
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            {t.products}
          </a>
          <Link to="/checkout" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            {t.checkout}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
          >
            <Globe className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors uppercase">
              {language === 'en' ? 'CZ' : 'EN'}
            </span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
          >
            <ShoppingCart className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
