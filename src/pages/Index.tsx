import { useEffect } from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import PricingCards from "@/components/PricingCards";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ReduPhine Caps",
    "image": "https://links.vittabalance.com.br/wp-content/uploads/2025/05/photo_2025-04-30_09-58-06.jpg",
    "description": "ReduPhine Caps é um suplemento alimentar natural desenvolvido para apoiar seu bem-estar e uma rotina saudável. Formulado com ingredientes naturais cuidadosamente selecionados.",
    "brand": {
      "@type": "Brand",
      "name": "Vittabalance"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "147.00",
      "highPrice": "377.00",
      "availability": "https://schema.org/InStock",
      "url": "https://app.monetizze.com.br/r/AFX20871337"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  };

  return (
    <>
      <Helmet>
        <title>ReduPhine Caps - Suplemento Natural para Bem-Estar | Vittabalance</title>
        <meta name="description" content="ReduPhine Caps: suplemento 100% natural que apoia seu bem-estar. Frete grátis, garantia de 30 dias e pagamento seguro. Compre com até 3 potes grátis!" />
        <meta name="keywords" content="reduphine caps, suplemento natural, bem-estar, emagrecimento natural, vittabalance" />
        <meta name="author" content="Vittabalance" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ReduPhine Caps - Suplemento Natural para Bem-Estar" />
        <meta property="og:description" content="Descubra o poder dos ingredientes naturais. Frete grátis e garantia de 30 dias!" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://links.vittabalance.com.br/wp-content/uploads/2025/05/photo_2025-04-30_09-58-06.jpg" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ReduPhine Caps - Suplemento Natural" />
        <meta name="twitter:description" content="Suplemento 100% natural para apoiar seu bem-estar" />
        <meta name="twitter:image" content="https://links.vittabalance.com.br/wp-content/uploads/2025/05/photo_2025-04-30_09-58-06.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <HowItWorks />
        <VideoSection />
        <PricingCards />
        <Guarantee />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Index;
