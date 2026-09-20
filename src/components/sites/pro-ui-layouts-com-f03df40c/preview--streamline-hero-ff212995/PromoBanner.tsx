import { ArrowUpRightIcon } from "../shared/icons";

import styles from "./streamline-hero.module.css";

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
          <span aria-hidden="true" className={styles.rocket}>
            🚀
          </span>
          Biến video dài thành{" "}
          <span className={styles.promoPro}>Shorts cuốn hút</span>
          <span className={styles.promoTail}>
            — AI tự chọn khoảnh khắc nổi bật, chuyển khung dọc và tạo caption tự
            động.
          </span>
        </p>
        <ArrowUpRightIcon className={styles.promoArrow} />
      </div>
    </a>
  );
}
