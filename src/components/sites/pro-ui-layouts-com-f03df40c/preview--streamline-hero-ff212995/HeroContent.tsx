import {
  PlayIcon,
  StarIcon,
  UsersIcon,
} from "@/components/sites/pro-ui-layouts-com-f03df40c/shared/icons";

import styles from "./streamline-hero.module.css";

const ratingStars = Array.from({ length: 5 }, (_, index) => index);

export function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <h2 className={`${styles.heading} ${styles.entranceOne}`}>
        Build <span className={styles.highlight}>Amazing</span>
        <br />
        Products Faster
      </h2>

      <p className={`${styles.description} ${styles.entranceTwo}`}>
        Streamline your development process with our powerful tools and
        intuitive interface. Get from idea to launch in record time with
        AI-powered assistance.
      </p>

      <div className={`${styles.ctaRow} ${styles.entranceThree}`}>
        <button
          className={`${styles.cta} ${styles.primaryCta}`}
          type="button"
        >
          Get Started
        </button>
        <button
          className={`${styles.cta} ${styles.secondaryCta}`}
          type="button"
        >
          <PlayIcon className={styles.playIcon} />
          Watch Demo
        </button>
      </div>

      <div className={`${styles.metrics} ${styles.entranceFour}`}>
        <div className={styles.metric}>
          <span className={styles.stars} aria-label="4.9 out of 5 stars">
            {ratingStars.map((star) => (
              <StarIcon
                className={styles.starIcon}
                fill="currentColor"
                key={star}
              />
            ))}
          </span>
          <span>4.9/5 rating</span>
        </div>

        <div className={styles.metric}>
          <UsersIcon className={styles.usersIcon} />
          <span>50k+ users</span>
        </div>
      </div>
    </div>
  );
}
