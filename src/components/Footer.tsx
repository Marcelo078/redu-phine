import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">ReduPhine Caps</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Seu aliado natural para uma vida mais equilibrada e saudável. Desenvolvido com os mais altos padrões de qualidade.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#ofertas" className="hover:text-accent transition-colors">Ofertas</a></li>
                <li><a href="#como-funciona" className="hover:text-accent transition-colors">Como Funciona</a></li>
                <li><a href="#beneficios" className="hover:text-accent transition-colors">Benefícios</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Informações</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Frete Grátis para todo Brasil</li>
                <li>Garantia de 30 dias</li>
                <li>Pagamento 100% Seguro</li>
                <li>Suporte Especializado</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} ReduPhine Caps by Vittabalance. Todos os direitos reservados.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-2">
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
            </p>
            <p className="text-xs text-primary-foreground/60 flex items-center justify-center gap-1 mt-4">
              Feito com <Heart className="w-3 h-3 fill-current" /> para sua saúde
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
