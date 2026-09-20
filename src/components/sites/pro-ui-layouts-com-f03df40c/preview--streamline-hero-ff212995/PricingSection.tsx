import styles from "./streamline-hero.module.css";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Standard · 1 tháng",
    price: "300.000 đ /tháng",
    description:
      "Linh hoạt theo tháng, phù hợp để bắt đầu và dùng đều đặn.",
    features: [
      "Mọi tính năng local không trừ credits",
      "1.000 credits cloud mỗi tháng",
      "Sử dụng trên một thiết bị",
      "Cộng dồn credits một tháng",
      "Có thể mua thêm credits",
    ],
  },
  {
    title: "Standard · 1 năm",
    price: "899.000 đ /năm",
    description:
      "Đủ tính năng thiết yếu, tiết kiệm 2.701.000đ so với trả tháng.",
    features: [
      "Mọi tính năng local không trừ credits",
      "1.000 credits cloud mỗi tháng",
      "Sử dụng đồng thời trên hai thiết bị",
      "Cộng dồn credits một tháng",
      "Có thể mua thêm credits",
    ],
    featured: true,
  },
  {
    title: "Pro · 1 năm",
    price: "1.899.000 đ /năm",
    description:
      "Cho nhà sáng tạo cần nhiều cloud, nhiều thiết bị và ưu tiên xử lý.",
    features: [
      "Mọi quyền lợi của Standard",
      "1.500 credits cloud mỗi tháng",
      "Sử dụng đồng thời trên năm thiết bị",
      "Ưu tiên hàng đợi cloud",
      "Thêm hai tác vụ cloud đồng thời",
      "Giảm 10% khi mua thêm credits",
    ],
  },
];

export function PricingSection() {
  return (
    <section className={styles.pricingSection} id="bang-gia">
      <div className={styles.pricingHeading}>
        <span className={styles.pricingEyebrow}>Bảng giá</span>
        <h2>Chọn gói dành cho bạn</h2>
        <p>Ba lựa chọn rõ ràng, dùng trọn bộ công cụ sáng tạo của NNLauncher.</p>
      </div>

      <div className={styles.pricingGrid}>
        {pricingPlans.map((plan) => (
          <article
            className={`${styles.pricingCard} ${
              plan.featured ? styles.pricingFeatured : ""
            }`}
            key={plan.title}
          >
            {plan.featured ? (
              <span className={styles.popularBadge}>Phổ biến nhất</span>
            ) : null}
            <h3>{plan.title}</h3>
            <div className={styles.planPrice}>{plan.price}</div>
            <p className={styles.planDescription}>{plan.description}</p>
            <a className={styles.planButton} href="#lien-he">
              Bắt đầu
            </a>
            <ul className={styles.planFeatures}>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
