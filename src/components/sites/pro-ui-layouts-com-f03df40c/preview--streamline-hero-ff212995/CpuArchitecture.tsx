import styles from "./streamline-hero.module.css";

const cpuArchitectureAsset =
  "/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/cpu-architecture.svg";

export function CpuArchitecture() {
  return (
    <div className={styles.cpu} aria-hidden="true">
      <img
        className={styles.cpuImage}
        src={cpuArchitectureAsset}
        alt=""
        width={200}
        height={100}
        draggable={false}
      />
      <div className={styles.hatch} />
    </div>
  );
}
