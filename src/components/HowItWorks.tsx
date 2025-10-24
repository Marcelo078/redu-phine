const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Como Funciona o ReduPhine Caps?
            </h2>
            <p className="text-lg text-muted-foreground">
              Entenda como este suplemento pode fazer parte da sua rotina saudável
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Composição Natural
              </h3>
              <p className="text-muted-foreground">
                Desenvolvido com ingredientes naturais que trabalham em harmonia com seu organismo.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Fácil Utilização
              </h3>
              <p className="text-muted-foreground">
                Basta tomar 2 cápsulas por dia com água, preferencialmente antes das refeições principais.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Resultados Consistentes
              </h3>
              <p className="text-muted-foreground">
                Use de forma contínua por pelo menos 3 meses para obter os melhores resultados.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 space-y-6 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground text-center">
              Modo de Uso Recomendado
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Dosagem</h4>
                  <p className="text-muted-foreground">2 cápsulas por dia, uma pela manhã e outra à noite</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quando tomar</h4>
                  <p className="text-muted-foreground">Preferencialmente 30 minutos antes das refeições com um copo de água</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Duração</h4>
                  <p className="text-muted-foreground">Recomendamos o uso contínuo por no mínimo 90 dias para melhores resultados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
