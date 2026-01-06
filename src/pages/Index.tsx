import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartSidebar from '@/components/CartSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartSidebar />
      <main>
        <Hero />
        <ProductGrid />
        
        {/* Footer */}
        <footer className="py-12 bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-foreground">
                  Aqua <span className="text-primary">Naturale</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                © 2026 Aqua Naturale. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
