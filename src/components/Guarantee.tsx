import { Button } from "@/components/ui/button";
import { Shield, Clock, RefreshCcw } from "lucide-react";
import garantia from "@/assets/garantia-30-dias.webp";

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Garantia Incondicional
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Garantia de 30 Dias
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estamos tão confiantes nos benefícios do ReduPhine Caps que oferecemos uma garantia total de satisfação. Se você não estiver satisfeito pelos motivos que forem, devolvemos 100% do seu investimento.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">30 Dias Para Testar</h3>
                    <p className="text-muted-foreground text-sm">
                      Você tem um mês inteiro para experimentar e sentir os resultados
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <RefreshCcw className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Devolução Simples</h3>
                    <p className="text-muted-foreground text-sm">
                      Não satisfeito? Devolvemos seu dinheiro sem burocracia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Zero Riscos</h3>
                    <p className="text-muted-foreground text-sm">
                      Sua compra está 100% protegida pela nossa garantia
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="cta" size="xl" className="mt-6" asChild>
                <a href="#ofertas">
                  Experimente Sem Riscos Agora
                </a>
              </Button>
            </div>

            <div className="flex justify-center">
              <img 
                src={garantia} 
                alt="Garantia de 30 dias - ReduPhine Caps" 
                className="max-w-full h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
