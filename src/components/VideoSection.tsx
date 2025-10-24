const VideoSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Conheça Mais Sobre o ReduPhine Caps
            </h2>
            <p className="text-lg text-muted-foreground">
              Assista aos vídeos e descubra como o ReduPhine pode transformar sua rotina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="https://via.placeholder.com/640x360/8B5CF6/FFFFFF?text=ReduPhine+Caps"
                >
                  <source src="https://storage.reduphinecaps.com.br/wp-content/uploads/2024/07/VSL-Reduphine.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <h3 className="text-xl font-bold text-foreground text-center">
                Apresentação do Produto
              </h3>
            </div>

            <div className="space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="https://via.placeholder.com/640x360/8B5CF6/FFFFFF?text=Nutricionista"
                >
                  <source src="https://storage.reduphinecaps.com.br/wp-content/uploads/2024/07/Nutri-Maria-Leticia.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <h3 className="text-xl font-bold text-foreground text-center">
                Opinião da Nutricionista Maria Letícia
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
