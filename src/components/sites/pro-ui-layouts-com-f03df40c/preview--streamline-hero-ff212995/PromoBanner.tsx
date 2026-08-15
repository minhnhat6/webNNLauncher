import Image from "next/image";

import { ArrowUpRightIcon } from "../shared/icons";

import styles from "./streamline-hero.module.css";

const rocketSrc =
  "/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/images/rocket.webp";

export function PromoBanner() {
  return (
    <a href="https://pro.ui-layouts.com">
      <div className={styles.promo}>
        <div
          aria-hidden="true"
          className={`${styles.promoGradient} ${styles.promoGradientOne}`}
        />
        <div
          aria-hidden="true"
          className={`${styles.promoGradient} ${styles.promoGradientTwo}`}
        />

        <p className={styles.promoCopy}>
          <Image
            alt=""
            className={styles.rocket}
            height={24}
            priority
            src={rocketSrc}
            width={24}
          />
          Ship faster with{" "}
          <span className={styles.promoPro}>UI-Layouts Pro</span>
          <span className={styles.promoTail}>
            – 50+ Tailwind &amp; React components for production-ready UIs
          </span>
        </p>
        <ArrowUpRightIcon className={styles.promoArrow} />
      </div>
    </a>
  );
}
