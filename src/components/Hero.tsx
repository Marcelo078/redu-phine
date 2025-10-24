import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Truck } from "lucide-react";
import produtoNatural from "@/assets/produto-natural.webp";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjItMnptMCAyaC0yIDJ6bTAtMmgtMiAyem0tMiAwaC0yIDJ6bS0yIDBoLTIgMnptMCAyaC0yIDJ6bTIgMGgtMiAyem0wIDJoLTIgMnptLTIgMGgtMiAyem0yLTRoLTIgMnptMC0yaC0yIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-lg">
                <Shield className="w-4 h-4" />
                100% Natural e Seguro
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              ReduPhine Caps
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              O suplemento natural que apoia seu bem-estar
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Desenvolvido com ingredientes naturais cuidadosamente selecionados, ReduPhine Caps é o aliado ideal para quem busca uma vida mais equilibrada e saudável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="xl" 
                variant="cta" 
                className="group"
                asChild
              >
                <a href="#ofertas">
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Ver Ofertas Exclusivas
                </a>
              </Button>
              
              <Button 
                size="xl" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                asChild
              >
                <a href="#como-funciona">
                  Saiba Mais
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-white/90">
                <Truck className="w-5 h-5 text-accent" />
                <span className="font-medium">Frete Grátis</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-medium">Garantia 30 dias</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center animate-float">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
            <img 
              src={produtoNatural} 
              alt="ReduPhine Caps - Suplemento Natural" 
              className="relative z-10 max-w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
