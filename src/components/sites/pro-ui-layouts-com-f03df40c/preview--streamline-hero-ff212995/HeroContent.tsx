import { UserPlusIcon } from "lucide-react";

import {
  StarIcon,
  UsersIcon,
} from "@/components/sites/pro-ui-layouts-com-f03df40c/shared/icons";

import styles from "./streamline-hero.module.css";

const ratingStars = Array.from({ length: 5 }, (_, index) => index);

export function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <h2 className={`${styles.heading} ${styles.entranceOne}`}>
        <span className={styles.headingLine}>
          Tạo <span className={styles.highlight}>tuyệt phẩm</span>
        </span>
        <span className={`${styles.headingLine} ${styles.headingLineSecond}`}>
          <span>nhanh hơn</span>
          <span className={styles.aiTag} aria-hidden="true">
            <span>✦</span> với AI
          </span>
        </span>
      </h2>

      <p className={`${styles.description} ${styles.entranceTwo}`}>
        Tối ưu quy trình sáng tạo với công cụ AI mạnh mẽ và giao diện trực
        quan. Biến video dài thành Shorts cuốn hút, sẵn sàng đăng chỉ trong vài
        phút.
      </p>

      <div className={`${styles.ctaRow} ${styles.entranceThree}`}>
        <button
          className={`${styles.cta} ${styles.secondaryCta}`}
          type="button"
        >
          <UserPlusIcon className={styles.playIcon} />
          <span>Đăng ký ngay</span>
        </button>
      </div>

      <div className={`${styles.metrics} ${styles.entranceFour}`}>
        <div className={styles.metric}>
          <span className={styles.stars} aria-label="Đánh giá 4,9 trên 5 sao">
            {ratingStars.map((star) => (
              <StarIcon
                className={styles.starIcon}
                fill="currentColor"
                key={star}
              />
            ))}
          </span>
          <span>4,9/5 điểm</span>
        </div>

        <div className={styles.metric}>
          <UsersIcon className={styles.usersIcon} />
          <span>50K+ người dùng</span>
        </div>
      </div>
    </div>
  );
}
