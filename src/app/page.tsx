import { CpuArchitecture } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/CpuArchitecture";
import { HeroContent } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/HeroContent";
import { LogoMarquee } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/LogoMarquee";
import { PromoBanner } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/PromoBanner";
import { SiteHeader } from "@/components/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/SiteHeader";
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
        <LogoMarquee />
      </div>
    </section>
  );
}
