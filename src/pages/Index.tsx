import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>SafeGrip — Professionele Werkhandschoenen Benelux</title>
        <meta 
          name="description" 
          content="B2B groothandel in professionele werkhandschoenen. Officieel Granberg distributeur voor Nederland en België. Snijbestendige, winter, chemisch en impactbestendige handschoenen per bundel."
        />
        <meta property="og:title" content="SafeGrip — Professionele Werkhandschoenen Benelux" />
        <meta property="og:description" content="B2B groothandel in professionele werkhandschoenen. Officieel Granberg distributeur voor Nederland en België." />
      </Helmet>

      <HeroSection />
      <CollectionsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
