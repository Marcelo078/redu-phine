import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é ReduPhine Caps?",
    answer: "ReduPhine Caps é um suplemento alimentar natural desenvolvido para apoiar seu bem-estar e uma rotina saudável. Contém ingredientes naturais cuidadosamente selecionados, apresentados em cápsulas práticas de 60 unidades por pote."
  },
  {
    question: "Como devo tomar ReduPhine Caps?",
    answer: "Recomendamos tomar 2 cápsulas por dia com água, preferencialmente 30 minutos antes das refeições principais (almoço e jantar). Para melhores resultados, use de forma contínua por no mínimo 3 meses."
  },
  {
    question: "ReduPhine Caps tem contraindicações?",
    answer: "Por ser um produto natural, ReduPhine Caps é seguro para a maioria das pessoas. No entanto, gestantes, lactantes, menores de 18 anos e pessoas com condições médicas específicas devem consultar um médico antes do uso."
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Os resultados podem variar de pessoa para pessoa, dependendo de diversos fatores como metabolismo, rotina alimentar e prática de atividades físicas. Muitos usuários relatam perceber mudanças positivas a partir do primeiro mês, mas recomendamos uso contínuo por no mínimo 90 dias."
  },
  {
    question: "Posso comprar apenas 1 pote?",
    answer: "Sim! Oferecemos desde a opção de 1 pote (1 mês de tratamento) até combos promocionais de até 8 potes. No entanto, para resultados mais consistentes, recomendamos os kits de 3 ou 5 meses, que também oferecem melhor custo-benefício."
  },
  {
    question: "O frete é grátis?",
    answer: "Sim! Todos os nossos combos incluem frete grátis para todo o Brasil. Você recebe seu produto com segurança e comodidade, sem custos adicionais."
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Se por qualquer motivo você não ficar satisfeito com o ReduPhine Caps, basta entrar em contato conosco dentro de 30 dias após a compra. Devolveremos 100% do valor investido, sem perguntas ou burocracia."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Absolutamente! Utilizamos plataformas de pagamento certificadas e com os mais altos padrões de segurança. Seus dados estão totalmente protegidos e você pode pagar com cartão de crédito em até 12x ou à vista com desconto."
  },
  {
    question: "Recebo algum bônus na compra?",
    answer: "Sim! Todos os combos incluem e-books exclusivos, acesso ao app da Vittabalance e participação no Grupo VIP com dicas e suporte. Além disso, nos kits promocionais você ganha potes extras gratuitamente!"
  },
  {
    question: "Quanto tempo demora para receber?",
    answer: "Após a confirmação do pagamento, seu pedido é processado e enviado em até 3 dias úteis. O prazo de entrega varia conforme sua região, mas geralmente fica entre 7 a 15 dias úteis para todo o Brasil."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o ReduPhine Caps
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
