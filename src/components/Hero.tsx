import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import aquaApple from '@/assets/aqua-apple.png';
import aquaStrawberry from '@/assets/aqua-strawberry.png';
import aquaNatural from '@/assets/aqua-natural.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-16">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">{t.naturalIngredients}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              {t.heroTitle1}{' '}
              <span className="text-primary">{t.heroTitle2}</span>
              <br />
              {t.heroTitle3}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              {t.heroDescription}
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95"
              >
                {t.shopNow}
                <ArrowDown className="w-5 h-5" />
              </a>
              <a
                href="#products"
                className="px-8 py-4 border-2 border-border text-foreground rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                {t.viewFlavors}
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-foreground">330ml</p>
                <p className="text-muted-foreground text-sm">{t.perfectSize}</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">0g</p>
                <p className="text-muted-foreground text-sm">{t.addedSugar}</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">3</p>
                <p className="text-muted-foreground text-sm">{t.deliciousFlavors}</p>
              </div>
            </div>
          </div>

          {/* Product Showcase - Cropped to show only products */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-apple/30 via-natural/30 to-strawberry/30 rounded-full blur-3xl scale-110" />
              
              {/* Cans arrangement with slide down animation */}
              <div className="relative flex items-end justify-center">
                <div className="overflow-hidden">
                  <img
                    src={aquaApple}
                    alt="Aqua Naturale Apple"
                    className="h-64 md:h-80 object-contain object-top drop-shadow-2xl -rotate-6 translate-x-8 animate-slide-down-bounce"
                    style={{ 
                      animationDelay: '0.2s',
                      clipPath: 'inset(15% 0 0 0)'
                    }}
                  />
                </div>
                <div className="overflow-hidden z-10">
                  <img
                    src={aquaNatural}
                    alt="Aqua Naturale Natural"
                    className="h-72 md:h-96 object-contain object-top drop-shadow-2xl animate-slide-down-bounce"
                    style={{ 
                      animationDelay: '0s',
                      clipPath: 'inset(15% 0 0 0)'
                    }}
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={aquaStrawberry}
                    alt="Aqua Naturale Strawberry"
                    className="h-64 md:h-80 object-contain object-top drop-shadow-2xl rotate-6 -translate-x-8 animate-slide-down-bounce"
                    style={{ 
                      animationDelay: '0.4s',
                      clipPath: 'inset(15% 0 0 0)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
