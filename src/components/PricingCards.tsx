import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Gift, ShoppingCart } from "lucide-react";
import poteUnico from "@/assets/pote-unico.webp";
import combo2 from "@/assets/combo-2-leve-3.webp";
import combo3 from "@/assets/combo-3-leve-5.webp";
import combo5 from "@/assets/combo-5-leve-8.webp";

const pricingOptions = [
  {
    id: 1,
    title: "1 Pote",
    subtitle: "1 mês de tratamento",
    image: poteUnico,
    bonus: null,
    priceInstallment: "14,76",
    priceTotal: "147,00",
    url: "https://app.monetizze.com.br/r/AFX20871337",
    popular: false,
  },
  {
    id: 2,
    title: "Compre 2 Leve 3",
    subtitle: "3 meses de tratamento",
    image: combo2,
    bonus: "1 POTE GRÁTIS",
    priceInstallment: "19,78",
    priceTotal: "197,00",
    url: "https://app.monetizze.com.br/r/AFX20871337/?u=BX81190",
    popular: false,
  },
  {
    id: 3,
    title: "Compre 3 Leve 5",
    subtitle: "5 meses de tratamento",
    image: combo3,
    bonus: "2 POTES GRÁTIS",
    priceInstallment: "24,80",
    priceTotal: "247,00",
    url: "https://app.monetizze.com.br/r/AFX20871337/?u=BQ81114",
    popular: true,
  },
  {
    id: 4,
    title: "Compre 5 Leve 8",
    subtitle: "8 meses de tratamento",
    image: combo5,
    bonus: "3 POTES GRÁTIS",
    priceInstallment: "37,85",
    priceTotal: "377,00",
    url: "https://app.monetizze.com.br/r/AFX20871337/?u=YJ80941",
    popular: false,
  },
];

const PricingCards = () => {
  return (
    <section id="ofertas" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Escolha Seu Combo Ideal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quanto mais você investe na sua saúde, mais você economiza. Aproveite nossas ofertas exclusivas!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pricingOptions.map((option) => (
            <Card 
              key={option.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                option.popular ? 'border-2 border-accent shadow-xl' : ''
              }`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 rounded-bl-lg font-bold text-sm">
                  MAIS VENDIDO
                </div>
              )}
              
              {option.bonus && (
                <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-center py-2 font-bold text-sm">
                  <Gift className="inline w-4 h-4 mr-1" />
                  VOCÊ GANHA {option.bonus}
                </div>
              )}
              
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{option.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{option.subtitle}</p>
                  <Badge variant="secondary" className="text-xs">
                    + E-Books + App Exclusivo + Grupo VIP
                  </Badge>
                </div>

                <div className="flex justify-center py-4">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="max-h-64 w-auto object-contain drop-shadow-lg"
                  />
                </div>

                <div className="text-center space-y-2 border-t pt-4">
                  <p className="text-sm text-muted-foreground">POR APENAS 12X</p>
                  <p className="text-4xl font-bold text-primary">
                    R$ {option.priceInstallment}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ou R$ {option.priceTotal} à vista
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-success" />
                    <span>Frete Grátis para todo Brasil</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-success" />
                    <span>Garantia de 30 dias</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-success" />
                    <span>Pagamento 100% seguro</span>
                  </div>
                </div>

                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Comprar Agora
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Atenção:</strong> Estoque limitado. Aproveite as condições especiais enquanto durar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
