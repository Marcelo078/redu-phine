import { Card, CardContent } from "@/components/ui/card";
import { Heart, Zap, Leaf, Shield } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Formulado com ingredientes naturais cuidadosamente selecionados para sua saúde e bem-estar."
  },
  {
    icon: Shield,
    title: "Seguro e Testado",
    description: "Produto desenvolvido seguindo rigorosos padrões de qualidade e segurança alimentar."
  },
  {
    icon: Zap,
    title: "Fácil de Usar",
    description: "Basta tomar 2 cápsulas por dia com água para aproveitar todos os benefícios."
  },
  {
    icon: Heart,
    title: "Bem-Estar Completo",
    description: "Contribui para uma rotina mais equilibrada e saudável no seu dia a dia."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Por Que Escolher ReduPhine Caps?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os diferenciais que fazem do ReduPhine Caps uma escolha inteligente para sua saúde
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
