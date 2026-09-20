import { CpuArchitecture } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/CpuArchitecture";
import { ContactSection } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/ContactSection";
import { HeroContent } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/HeroContent";
import { LogoMarquee } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/LogoMarquee";
import { PricingSection } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/PricingSection";
import { PromoBanner } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/PromoBanner";
import { SiteHeader } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/SiteHeader";
import { WorkflowShowcase } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/WorkflowShowcase";
import styles from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/streamline-hero.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.gutter}>
        <PromoBanner />
        <SiteHeader />
        <main className={styles.heroMain}>
          <HeroContent />
          <CpuArchitecture />
        </main>
        <WorkflowShowcase />
        <LogoMarquee />
        <PricingSection />
        <ContactSection />
      </div>
    </section>
  );
}
