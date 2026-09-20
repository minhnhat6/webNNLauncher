import {
  ArrowUpRightIcon,
  MessageCircleIcon,
  SendIcon,
  UsersRoundIcon,
  type LucideIcon,
} from "lucide-react";

import styles from "./streamline-hero.module.css";

interface ContactChannel {
  name: string;
  value: string;
  href: string;
  Icon: LucideIcon;
  tone: string;
}

const contactChannels: ContactChannel[] = [
  {
    name: "Facebook",
    value: "facebook.com/nnlauncher",
    href: "https://facebook.com/nnlauncher",
    Icon: UsersRoundIcon,
    tone: styles.contactBlue,
  },
  {
    name: "Telegram",
    value: "@hiucoder",
    href: "https://t.me/hiucoder",
    Icon: SendIcon,
    tone: styles.contactTelegram,
  },
  {
    name: "Zalo",
    value: "0334622902",
    href: "https://zalo.me/0334622902",
    Icon: MessageCircleIcon,
    tone: styles.contactCyan,
  },
];

export function ContactSection() {
  return (
    <section className={styles.contactSection} id="lien-he">
      <div className={styles.contactIntro}>
        <span className={styles.contactEyebrow}>Liên hệ</span>
        <h2 className={styles.contactTitle}>Cần hỗ trợ? Nhắn cho chúng tôi.</h2>
        <p className={styles.contactDescription}>
          Chọn kênh thuận tiện nhất. Đội ngũ NNLauncher sẽ phản hồi bạn sớm
          nhất có thể.
        </p>
      </div>

      <div className={styles.contactGrid}>
        {contactChannels.map(({ name, value, href, Icon, tone }) => (
          <a
            className={styles.contactCard}
            href={href}
            key={name}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            target={href.startsWith("http") ? "_blank" : undefined}
          >
            <span className={`${styles.contactIcon} ${tone}`}>
              <Icon aria-hidden="true" />
            </span>
            <span className={styles.contactCopy}>
              <strong>{name}</strong>
              <span>{value}</span>
            </span>
            <ArrowUpRightIcon
              aria-hidden="true"
              className={styles.contactArrow}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
